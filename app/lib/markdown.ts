/**
 * Simple markdown-to-HTML renderer for blog content.
 * Handles: headings, bold, tables, code blocks, paragraphs, links, lists.
 * No external dependencies needed.
 */

export function renderMarkdown(md: string): string {
  let html = md;

  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const langClass = lang ? ` class="language-${lang}"` : "";
    return `<pre class="bg-[#0B0A1A] border border-[#2A2560] rounded-lg p-4 my-4 overflow-x-auto text-sm text-[#A99BD6]"><code${langClass}>${code.trim()}</code></pre>`;
  });

  html = html.replace(/`([^`]+)`/g, '<code class="bg-[#0B0A1A] px-1.5 py-0.5 rounded text-sm text-[#7C3AED]">$1</code>');

  html = html.replace(/(\|[^\n]+\|\n)(\|[-:| ]+\|\n)((?:\|[^\n]+\|\n?)*)/g, (match, headerRow, separatorRow, bodyRows) => {
    const headers = headerRow
      .split("|")
      .filter((h: string) => h.trim())
      .map((h: string) => `<th class="px-4 py-2 text-left text-sm font-semibold text-[#EDE9FE] border-b border-[#2A2560]">${h.trim()}</th>`)
      .join("");

    const rows = bodyRows
      .trim()
      .split("\n")
      .map((row: string) => {
        const cells = row
          .split("|")
          .filter((c: string) => c.trim())
          .map((c: string) => `<td class="px-4 py-2 text-sm text-[#A99BD6] border-b border-[#2A2560]">${c.trim()}</td>`)
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");

    return `<div class="overflow-x-auto my-4"><table class="w-full border-collapse bg-[#12102A] rounded-lg border border-[#2A2560]"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
  });

  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#EDE9FE]">$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong class="font-bold text-[#EDE9FE]">$1</strong>');

  html = html.replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#7C3AED] hover:text-[#6D28D9] hover:underline">$1</a>'
  );

  html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-[#EDE9FE] mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-[#EDE9FE] mt-8 mb-4">$1</h2>');

  html = html.replace(/^[-*] (.+)$/gm, '<li class="text-[#A99BD6] ml-4 list-disc">$1</li>');
  html = html.replace(/((?:<li[^>]*>.*?<\/li>\n?)+)/g, '<ul class="space-y-1 my-3">$1</ul>');

  html = html.replace(/^\d+\. (.+)$/gm, '<li class="text-[#A99BD6] ml-4 list-decimal">$1</li>');

  html = html.replace(/^---$/gm, '<hr class="my-8 border-[#2A2560]" />');

  const lines = html.split("\n");
  const result: string[] = [];
  let inHtmlBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      result.push("");
      continue;
    }

    if (line.startsWith("<h") || line.startsWith("<pre") || line.startsWith("</pre") || 
        line.startsWith("<ul") || line.startsWith("</ul") || line.startsWith("<li") ||
        line.startsWith("<div") || line.startsWith("</div") || line.startsWith("<table") ||
        line.startsWith("</table") || line.startsWith("<tr") || line.startsWith("<th") ||
        line.startsWith("<td") || line.startsWith("<thead") || line.startsWith("<tbody") ||
        line.startsWith("<hr")) {
      result.push(line);
      continue;
    }

    if (!line.startsWith("<")) {
      result.push(`<p class="text-[#A99BD6] leading-relaxed mb-4">${line}</p>`);
    } else {
      result.push(line);
    }
  }

  return result.join("\n");
}
