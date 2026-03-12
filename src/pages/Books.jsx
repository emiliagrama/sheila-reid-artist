import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../styles/pages.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Books() {
  const container = useRef(null);

  useGSAP(() => {
    const features = gsap.utils.toArray(".bookFeature");

    features.forEach((feature) => {
      const media = feature.querySelector(".bookFeature__media");
      const content = feature.querySelector(".bookFeature__content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: feature,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      tl.from(media, {
        opacity: 0,
        y: 18,
        duration: 0.9,
        ease: "power2.out",
      });

      tl.from(
        content,
        {
          opacity: 0,
          y: 26,
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.72"
      );
    });
  }, { scope: container });

  return (
    <section ref={container} className="booksPage pageSection">
      <div className="pageIntro booksIntro">
        <p className="pageEyebrow">Selected Publications</p>
        <h1>Books</h1>
        <p className="pageLead">
          A selection of Sheila Reid’s published works, combining reflection,
          artistic process, and ideas shaped over decades of practice.
        </p>
      </div>

      <div className="booksList">
        <article className="bookFeature">
          <div className="bookFeature__media">
            <img
              src="/images/is-heaven-silent.png"
              alt="IS HEAVEN SILENT ?"
              className="bookFeature__image"
            />
          </div>

          <div className="bookFeature__content">
            <h2>IS HEAVEN SILENT ?</h2>

            <p>
              Critics say “The best writings about artists are always
              autobiographical.” In the case of women artists, they're also
              essential if any trace of our art is to remain. This book is a
              personal reminisce of my work and life. It's a much more in-depth
              testimony, of my adventures than has ever been published before.
            </p>

            <div className="bookFeature__actions">
              <a
                href="#"
                className="bookLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </article>

        <article className="bookFeature bookFeature--reverse bookFeature--creaky">
          <div className="bookFeature__media">
            <img
              src="/images/Art-&-Creaky-bones.JPG"
              alt="ART & CREAKY BONES"
              className="bookFeature__image"
            />
          </div>

          <div className="bookFeature__content">
            <h2>ART & CREAKY BONES</h2>

            <p>
              This book won 6 literary awards in the categories, Art, Aging and
              Inspiration. It's goal is to help seniors find a vibrant, active,
              healthier life as they get older. The secret, scientists say, is
              finding a passion for something creative that can be a real
              exciting part of life. It's a colorful, cheerful, book that can
              bring comfort and motivation to people of any age. If you would
              like to read this, Art & Creaky Bones can be found at Amazon with
              this link.
            </p>

            <div className="bookFeature__actions">
              <a
                href="https://www.amazon.com/dp/1729874630/ref=cm_sw_em_r_mt_dp_i13rFbKFA9J8X"
                className="bookLink"
                target="_blank"
                rel="noreferrer"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </article>

        <article className="bookFeature">
          <div className="bookFeature__media">
            <img
              src="/images/Art-Without-Rejection.jpg"
              alt="ART WITHOUT REJECTION"
              className="bookFeature__image"
            />
          </div>

          <div className="bookFeature__content">
            <h2>ART WITHOUT REJECTION</h2>

            <p>
              Used in 200 universities, questions harmful practices in art and
              gives original alternatives. It has inspired many artists and
              teachers. Here are two examples:
            </p>

            <blockquote className="bookQuote">
              <p>
                "I generally whip right through a book, but Art Without
                Rejection provokes thought to such a degree that each paragraph
                requires me to sit back and contemplate. The book fairly
                whistles! She has such a forceful voice and is so forthright. I
                will continue to savor this book as I would a kilo of Beluga,
                enough to enrich the day and digest what I have consumed." Joan
                Messner, New York City
              </p>
            </blockquote>

            <blockquote className="bookQuote">
              <p>
                "Two months ago, Art Without Rejection sang to me and I picked
                it up off the shelf at the Art Center. It has made a profound
                change in my life, practice and perspective. It's a guiding
                light for artists. My own paintings have been profoundly
                influenced. I am drinking her words of nourishment and
                strength." Ezguel Olvera, California
              </p>
            </blockquote>
          </div>
        </article>
      </div>
    </section>
  );
}