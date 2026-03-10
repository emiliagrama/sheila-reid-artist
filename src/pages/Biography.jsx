import "../styles/biography.css";

export default function Biography() {
  return (
    <section className="biographyPage">
      <div className="biographyShell">
        <section className="biographyHero">
          <div className="biographyHero__text">
            <p className="biographyEyebrow">About the Artist</p>
            <h1 className="biographyTitle">Biography</h1>

            <p className="biographyLead">
              Naturally, it&apos;s unusual for a woman artist to have her works
              collected and/or exhibited by 33 museums in 12 countries. However,
              what struck her as odd was that in 1987, when Guggenheim curator
              Lisa Dennison approached her for an installation of her
              Hieroglyphics, there were 34 male artists collected alongside her,
              making her the only woman.
            </p>
          </div>

          <div className="biographyHero__media">
            <img
              src="/images/sheila-grid-installation.jpg"
              alt="Portrait of Sheila Reid"
            />
          </div>
        </section>

        <section className="biographyNarrative">
          <div className="biographySectionIntro">
            <p className="biographyEyebrow">Life & Practice</p>
          </div>

          <div className="biographyNarrative__grid">
            <div className="biographyNarrative__main">
              <p>
                She grew up in America within a traditional American family but
                pursued her studies at an experimental university and the Center
                for Creative Studies in Detroit. She then relocated to Milan,
                Italy, where she began her painting journey.
              </p>

              <p>
                In 1977, the city of Milan invited her to exhibit her first major
                installation, <em>Soft Patterns</em>, in a solo show at the museum
                Palazzo Arengario.
              </p>

              <p>
                Her experiences of living in five countries and speaking four
                languages served as a wonderful inspiration for her art.
              </p>
            </div>

            <aside className="biographyNarrative__side">
              <p>
                One of the most unusual aspects of her history was her first book,
                <em> Art Without Rejection</em>, which questioned many practices
                in the art world and was utilized in over 200 universities.
              </p>

              <p>
                Born in Minneapolis, she was the daughter of a farmer&apos;s son
                and a mother from a historic American family. She had two brothers
                and one sister.
              </p>

              <p>
                For more detailed information, her latest book
                <em> Heaven Is Silent: An Artist&apos;s Memoir</em> is available
                on Amazon.
              </p>

              <div className="biographyContactBlock">
                <p className="biographyContactLabel">Contact</p>
                <a href="mailto:Sheila8383@aol.com">Sheila8383@aol.com</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="biographyArchive">
          <div className="biographyArchive__intro">
            <p className="biographyEyebrow">Archive</p>
            <h2 className="biographySectionTitle">
              Selected Exhibitions & Collections
            </h2>
            <p className="biographyArchive__lead">
              A reference overview of exhibitions and institutional collections
              across Europe, North America, Asia, and beyond.
            </p>
          </div>

          <div className="biographyArchive__grid">
            <article className="biographyArchiveCard">
              <h3>Selected Exhibitions</h3>
              <ul>
                <li>Palazzo Arengario, Milan, Italy — 1977</li>
                <li>Utah Museum of Fine Art, Salt Lake City — 1987</li>
                <li>Institute of Contemporary Art, ICA, London, UK — 1988</li>
                <li>Maier Museum, Lynchburg, Virginia — 1986</li>
                <li>Nexus Foundation For Today&apos;s Art, Philadelphia — 1986</li>
                <li>Milliken & Parsons Art Center, South Carolina — 1986</li>
                <li>University of Mississippi Museum — 1986</li>
                <li>Selected Alumni for CCS, Preston Burke Gallery — 1989</li>
                <li>Monumental Works, touring France — 1989</li>
                <li>Grand Palais, Young Painters, Paris — 1983–1987</li>
                <li>Musée de Luxembourg, Women Artists, Paris — 1981–1984</li>
                <li>Municipal Museum, Bordeaux — 1983</li>
                <li>Pavillon Des Arts, Women Artists, Paris — 1985</li>
                <li>Gulbenkian Museum of Modern Art, Lisbon — 1991</li>
                <li>Fyns Kunst Museum, Denmark — 1991</li>
                <li>Art Gallery of Greater Victoria, Canada — 1990</li>
                <li>Midwest Museum of American Art, Indiana — 1996</li>
                <li>Downey Museum of Art, California — 1996</li>
                <li>Saco Museum, Maine USA — 1996</li>
                <li>The Paper Museum, Tokyo, Japan — 2007</li>
                <li>Museum of Modern Art, Biblioteca Alexandria, Egypt — 2007</li>
                <li>Kyoto Institute Museum Kyoto, Japan — 2007</li>
                <li>Museum of Artist Books, Baku, Azerbaijan — 2009</li>
              </ul>
            </article>

            <article className="biographyArchiveCard">
              <h3>Museum Collections</h3>
              <ul>
                <li>Solomon Guggenheim Museum, New York City — 1987</li>
                <li>Victoria & Albert Museum Library, London — 2007</li>
                <li>The Paper Museum, Tokyo, Japan — 2007</li>
                <li>Kyoto Institute, Kyoto, Japan — 2007</li>
                <li>Museum of Artist Books, Baku, Azerbaijan — 2009</li>
                <li>Musée d&apos;Art Moderne, Saint Etienne, France — 1993</li>
                <li>Supreme Court USA — Ruth Bader Ginsberg chambers</li>
                <li>Utah Museum of Fine Art — 1987</li>
                <li>Museum of Modern Art, Biblioteca Alexandria, Egypt — 2007</li>
                <li>Davis Museum at Wellesley University — 1995</li>
                <li>Harrison Museum of Art, University of Utah — 1998</li>
                <li>Fyns Kunstmuseum, Denmark — 1992</li>
                <li>Maier Museum, Virginia — 1986</li>
                <li>Downey Museum of Art, California — 1996</li>
                <li>Museum of Art & Science, Florida — 1996</li>
                <li>Midwest Museum of Art, Indiana — 1996</li>
                <li>Museo D&apos;Arte Contemporaneo, Castellôn, Spain — 1989</li>
                <li>Galerie D&apos;Art Contemporain, Chamalières, France — 1991</li>
                <li>Jacksonville University Museum, Florida — 1990</li>
                <li>McAllen International Museum, Texas — 1990</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="biographyFeature biographyFeature--closing">
          <figure className="biographyFeature__figure">
            <img className="biographyFinalImage"
              src="/images/sheila-bio-portrait.jpg"
              alt="Artwork or installation by Sheila Reid"
            />
          </figure>
        </section>
      </div>
    </section>
  );
}