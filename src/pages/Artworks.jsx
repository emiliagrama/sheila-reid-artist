import { useEffect, useMemo, useRef, useState } from "react";

const artworkSeries = [
  {
    title: "Plenitude Scrolls",
    years: "2016–2023",
    description: `Scrolls were an ancient form of art.Mine are different though.In 2016 my husband was very ill and my time was spent caring for him.Maybe for comfort, I began cutting all my previous 20 years of drawings into pieces, probably because cutting them felt strangely therapeutic.Then I glued random pieces onto photographic paper in different configurations. When
finished, I had 400 collages, and I began stitching some of them on to scrolls.
Each scroll has 6 collages and is a slightly different size, about  25 cm x 190 cm.
     Probably the most curious thing about Plenitude is that they're made from years of
drawings, which were almost all done when I was grieving for someone dear who
had died. Their joyful appearance is rather strange because the drawings originated in such pain.`,
    images: [
      { src: "/images/Plenitude-scrolls.jpg", alt: "Plenitude scrolls" },
      { src: "/images/Plenitude-more-scrolls.jpg", alt: "More Plenitude scrolls" }
    ]
  },

  {
    title: "Radiance",
    years: "2015–2016",
    description: `Radiance, a permanent solar light Installation, is a private commission comprised of 13 stainless steel structures, each with 18 solar lights. The poles are 20 cm wide x 400 cm tall.
Solar lights are like personal signs of contemporary life, but somehow infused with mystery because they're so independent. At night each one lights when it is ready,  never all together even though they have collected the same amount of sun during the day. The installation was judged an “oeurve majour” by experts and can be seen on top of the hill facing the town of Vence, France and the matisse Chapel, but in the day time only because the lights have all been turned off.`,
    images: [
      { src: "/images/Radiance-at-night.jpg", alt: "Radiance at night" },
      { src: "/images/Radiance-day.JPG", alt: "Radiance day" }
    ]
  },

  {
    title: "Hieroglyphics",
    years: "1982–1992",
    description: `Using simple imprints of everyday objects, stripped away everything unnecessary and reduced the image to pure form.It was the combination of signs that made them look like you could read them,as if they might be some forgotten ancient language.When together,they seemed to acquire a meaning of their own.
Diane Waldman, Deputy Director, Solomon Guggenheim Museum, New York City 1987
“The Guggenheim is happy to have acquired your work Hieroglyphics and is proud to have it as part of it's collection...”
Alexandra Tuttle
“Reid's work hints at the underlying unity in the universe.Her symbols resemble sacred languages...Yet in a curious alchemy that only art can achieve,Reid manages to transform the banal signs of our civilization's mediocrity,into a powerful secret universe.”`,
    images: [
      { src: "/images/Hieroglyphics-at-Art-Gallery-of-Victoria-Canada.jpg", alt: "Hieroglyphics Victoria Gallery" },
      { src: "/images/Hieroglyphics-Guggenheim040.jpg", alt: "Hieroglyphics Guggenheim" }
    ]
  },

  {
    title: "Architectural Patterns",
    years: "1988–1990",
    description: `Architecture makes us aware of the importance of patterns. They repeat on all
contemporary buildings. But it's a bit disturbing in a way, because what began as a tribute to contemporary architecture at it's best, seemed to focus on the repetition that's so common.

LETTER
Lisa (Dennison, Curator, Guggenheim Museum, New York City)
“I was about to send this letter when I received your absolutely glorious installation shots.
I am very impressed. You were very sensitive to the space in your work and I think the
marriage of the two is remarkable...”
A bientôt,
Lisa`,
    images: [
      { src: "/images/Architectural-Patterns-Grand-Palais.jpg", alt: "Architectural Patterns Grand Palais" },
      { src: "/images/Architectural-Patterns-in-Vence.jpg", alt: "Architectural Patterns Vence" }
    ]
  },

  {
    title: "Liberty",
    years: "1987",
    description: `Libery was a structure made at the request of a group of artists doing a show of monumental works that traveled around France. It was called Liberty partly because of the bright colors and partly because it was celebrating freedom from old ideas and customs.`,
    images: [
      { src: "/images/liberty.jpg", alt: "Liberty sculpture" },
      { src: "/images/liberty-outdoors.jpg", alt: "Liberty outdoors" }
    ]
  },

  {
    title: "Thirteen Triangles",
    years: "1986–1989",
    description: `In Sacred Geometry the triangle pointing upward expresses a longing for wisdom and strength. It indicates need and a desire for evolution. When I 'saw' the Thirteen Triangles in my mind, they had an undeciphered message on the interior of each structure. When they were finished, people stood in the center of them and often could feel something mysterious, a little bit like a vibration or a force of energy, something beneficial. The structures are 4,90 meters on each side and made from canvas, acrylic paint, and collage with metal pieces to attach them.
Magali Michel  art critic (translation)
« The forms in these structures are superbe, rich in color, like a symbol of human balance. They're a harmony between feelings and desire. »`,
    images: [
      { src: "/images/13-Triangles.jpg", alt: "Thirteen Triangles installation" },
      { src: "/images/Thirteen-Triangles.jpg", alt: "Thirteen Triangles close up" }
    ]
  },

  {
    title: "Feminine Reflections",
    years: "1985",
    description: `“Feminine reflections is about attitudes rather than visual symbols, it asks about stereotyped attitudes towards women, ambiguity, jealousy and weakness.   The piece comes alive by who it reflects, more than an image from it's own being.”
France Delville, Art Critic, (L'Atelier du Futur Revue des Universities du XXI Siecle magazine 1996 2014 translation)
“The elements in her work become beautiful in the repetition, in the structured accumulation. I'm thinking
of her Feminine Reflections... that sends shock waves through you, not because of the individual elements
but because of the whole.”`,
    images: [
      { src: "/images/Sheila-Reid-Feminine-Reflections.jpg", alt: "Feminine Reflections installation" },
      { src: "/images/Feminine-Reflect-close-up.jpg", alt: "Feminine Reflections close up" }
    ]
  },

  {
    title: "Soft Patterns",
    years: "1973–1978",
    description: ` My first Installation series, Soft Patterns panels and cylinders, I began in Milan, Italy in 1973. As a reaction to finding so many American consumer products the patterns were
      my reaction to world uniformity. Long term patterns
      constitute the future of any society.  I used the objects
      as signs and their repetition as patterns. Over the years
      they became more like symbols and a language to help read
      the future. The series was exhibited in many museums
      including Palazzo Arengario in Milan, the Utah Museum
      of Fine Art, Nexus Foundation for today's Art in
      Philadelphia, Fyns Kunstmuseum in Denmark, Gulbenkian
      Museum of Modern Art in Lisbon and many others in
      quite a few different countries.`,
    images: [
      { src: "/images/Soft-Patterns-at-Utah-Museum-of-Fine-Art.JPG", alt: "Soft Patterns Utah Museum" },
      { src: "/images/Soft-Patterns-panel.png", alt: "Soft Patterns panel" }
    ]
  }
];

export default function Artworks() {
  const allArtworkImages = useMemo(
    () =>
      artworkSeries.flatMap((series) =>
        series.images.map((image) => ({
          ...image,
          title: series.title,
          years: series.years
        }))
      ),
    []
  );

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    index: 0
  });

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (event) => {
    const touch = event.changedTouches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const diffX = touchStartX.current - touch.clientX;
    const diffY = touchStartY.current - touch.clientY;

    if (Math.abs(diffY) > Math.abs(diffX)) return;
    if (Math.abs(diffX) < 30) return;

    if (diffX > 0) {
      showNext();
    } else {
      showPrev();
    }
  };

  const openLightbox = (globalIndex) => {
    setLightbox({
      isOpen: true,
      index: globalIndex
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      index: 0
    });
  };

  const showPrev = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === 0
          ? allArtworkImages.length - 1
          : prev.index - 1
    }));
  };

  const showNext = () => {
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === allArtworkImages.length - 1
          ? 0
          : prev.index + 1
    }));
  };

  useEffect(() => {
    if (!lightbox.isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox.isOpen, allArtworkImages.length]);

  return (
    <>
      <section className="pageSection artworksPage">
        <div className="artistHero">
          <div className="artistHero__media">
            <img
              src="/images/sheila-portrait.jpg"
              alt="Portrait of Sheila Reid"
            />
          </div>

          <div className="artistHero__content">
            <p className="pageEyebrow">Artist Archive</p>
            <h1>Sheila Reid</h1>
            <p className="artistHero__lead">
              Art is a spiritual activity, because we don't know where it comes
              from, how it happens or why we see the world differently. Something
              mysterious happens.
            </p>
            <p className="artistHero__text">
              I see a clear picture of the piece in my mind, and study it for some
              time, before deciding if I should make the structure or Installation
              or Artist's Book, or not. Art critics call these pictures visions.
              Almost from the beginning, my work questioned traditional ideas and
              accepted truths, especially how we value art and what we do with our
              work. My instinctive reaction to the world around me, was always a
              probe rather than an answer. Even as a child, I never simply
              accepted things as truths because someone said I should. Art asks us
              to look deeper. That's one of it's greatest values, that it makes us
              see and discover the most unusual things.
            </p>
          </div>
        </div>

        <div className="artworksIntroBlock">
          <div className="pageIntro">
            <p className="pageEyebrow">Selected Works</p>
            <h2>Artworks</h2>
            <p className="pageLead">
              A curated selection of images from installations, scrolls, artist
              books, and visual work across different periods.
            </p>
          </div>
        </div>

        <div className="seriesList">
          {artworkSeries.map((series, index) => {
            const baseGlobalIndex = artworkSeries
              .slice(0, index)
              .reduce((total, item) => total + item.images.length, 0);

            return (
              <article
                className={`seriesBlock ${
                  index % 2 !== 0 ? "seriesBlock--reverse" : ""
                }`}
                key={series.title}
              >
                <div className="seriesBlock__content">
                  <p className="seriesBlock__years">{series.years}</p>
                  <h3>{series.title}</h3>
                  <p>{series.description}</p>
                </div>

                <div className="seriesBlock__gallery">
                  {series.images.map((image, imageIndex) => (
                    <button
                      type="button"
                      className="seriesBlock__imageButton"
                      key={image.src}
                      onClick={() => openLightbox(baseGlobalIndex + imageIndex)}
                      aria-label={`Open ${series.title} image ${imageIndex + 1}`}
                    >
                      <span className="seriesBlock__imageWrap">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="seriesBlock__image"
                        />
                      </span>
                    </button>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {lightbox.isOpen && (
        <div
          className="artLightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${allArtworkImages[lightbox.index].title} gallery`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="artLightbox__close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="artLightbox__nav artLightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="artLightbox__inner"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={allArtworkImages[lightbox.index].src}
              alt={allArtworkImages[lightbox.index].alt}
              className="artLightbox__image"
            />

            <div className="artLightbox__meta">
              <p className="artLightbox__years">
                {allArtworkImages[lightbox.index].years}
              </p>
              <p className="artLightbox__title">
                {allArtworkImages[lightbox.index].title}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="artLightbox__nav artLightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}