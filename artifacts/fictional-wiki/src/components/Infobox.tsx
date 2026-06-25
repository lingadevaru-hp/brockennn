import type { Infobox as InfoboxType } from '../types/article';

interface InfolboxProps {
  data: InfoboxType;
}

/** Renders a field value — auto-linking bare domains and markdown [text](url) patterns */
function FieldValue({ value }: { value: string }) {
  // Markdown link: [text](url)
  const mdLink = value.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
  if (mdLink) {
    return (
      <a href={mdLink[2]} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
        {mdLink[1]}
      </a>
    );
  }

  // Bare https?:// URL
  if (/^https?:\/\//.test(value)) {
    return (
      <a href={value} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
        {value.replace(/^https?:\/\//, '')}
      </a>
    );
  }

  // Bare domain that looks like a URL (contains a dot, no spaces, reasonable length)
  // e.g. github.com/lingadevaru-hp/Foss-Token, insurance.lingadevaru.in
  const domainPattern = /^([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;
  if (domainPattern.test(value) && !value.includes(' ') && value.length < 120) {
    const href = `https://${value}`;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
        {value}
      </a>
    );
  }

  return <>{value}</>;
}

export default function Infobox({ data }: InfolboxProps) {
  return (
    <table
      data-testid="infobox"
      className="
        w-full mb-4 text-sm border border-border bg-card
        md:float-right md:clear-right md:ml-4 md:mb-4 md:w-auto md:max-w-[280px]
        block md:table
      "
      style={{ clear: 'right' }}
    >
      <tbody>
        <tr>
          <th
            colSpan={2}
            className="text-center font-bold py-1.5 px-2 bg-border/60 text-foreground border-b border-border text-sm"
          >
            {data.title}
          </th>
        </tr>
        {data.image && (
          <tr>
            <td colSpan={2} className="p-1 text-center">
              {/* Clickable infobox image: open global lightbox via custom event, also allow opening in new tab/download */}
              <div className="inline-block">
                <button
                  type="button"
                  onClick={() => {
                    try {
                      window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { src: data.image } }));
                    } catch (e) {
                      // fallback: open in new tab
                      window.open(data.image, '_blank', 'noopener');
                    }
                  }}
                  title={data.imageCaption ? `${data.imageCaption} — click to view` : 'Click to view image'}
                  className="p-0 bg-transparent border-0 cursor-zoom-in"
                >
                  <img
                    src={data.image}
                    alt={data.imageCaption || data.title}
                    className="w-full max-h-48 object-contain"
                  />
                </button>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <a href={data.image} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Open</a>
                  <a href={data.image} download className="text-xs text-accent hover:underline">Download</a>
                </div>
              </div>

              {data.imageCaption && (
                <p className="text-xs text-muted-foreground mt-1 italic text-center">{data.imageCaption}</p>
              )}
            </td>
          </tr>
        )}
        {data.fields.map((field, i) => (
          <tr key={i} className="border-t border-border">
            <th className="py-1 px-2 font-bold text-left align-top bg-card/50 w-2/5 text-xs">
              {field.label}
            </th>
            <td className="py-1 px-2 align-top text-xs">
              <FieldValue value={field.value} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
