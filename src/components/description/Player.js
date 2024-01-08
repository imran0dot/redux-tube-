export default function Player({ src }) {
    return (
        <iframe
            width="100%"
            class="aspect-video"
            src={src}
            title="Some video title"
            frameBorder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
        ></iframe>
    );
}
