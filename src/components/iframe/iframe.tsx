export function YoutubeEmbed({ embedId }: { embedId: string }) {
  return (
    <div>
      <iframe
        rel="preconnect"
        width={"800"}
        height={"600"}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow={
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        }
        allowFullScreen
        title={"Embedded youtube"}
      />
    </div>
  );
}
