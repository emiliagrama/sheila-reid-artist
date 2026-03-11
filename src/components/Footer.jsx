import "../styles/footer.css"
export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">

        <div className="footerLinks">
          <a href="mailto:Sheila8383@aol.com">Email</a>

          <a
            href="https://www.instagram.com/sheilareidartist/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/sheila.reid.927"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>

        <p className="footerNote">
          © {new Date().getFullYear()} Sheila Reid — Artist Archive
        </p>

      </div>
    </footer>
  )
}