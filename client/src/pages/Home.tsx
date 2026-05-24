/**
 * BONCREPE — Home Page
 * Design: Vintage Bistro Clássico — fundo com padrão ornamental, tipografia elegante
 * Referência: Imagem enviada pelo cliente (estilo clássico francês)
 * Paleta: Tons quentes, dourado, rosa, cobre
 * Cardápio: 5 categorias em abas
 * Contato: WhatsApp + Horário + Endereço (sem email, sem reserva)
 */

import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ─── Imagens geradas (asset URLs do CDN) ───────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663691821799/NFmTH4vDGkFDnii24wKPcg/boncrepe-hero-4jcQcdQkGTjEpuc28onW59.webp";
const NUTELLA_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663691821799/NFmTH4vDGkFDnii24wKPcg/boncrepe-nutella-DW9tMQk9SPAwymDncMdCZE.webp";
const SALGADA_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663691821799/NFmTH4vDGkFDnii24wKPcg/boncrepe-salgada-4XbxkXrG6EjDRFCHK6uWei.webp";
const CHOCO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663691821799/NFmTH4vDGkFDnii24wKPcg/boncrepe-chocolate-quente-nLNRsYqhkbFN5uZw26edY8.webp";

// ─── WhatsApp link ──────────────────────────────────────────────────────────
const WA_BASE = "https://wa.me/5511922053411";
const WA_GERAL = `${WA_BASE}?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido`;

// ─── WhatsApp SVG Icon ──────────────────────────────────────────────────────
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── MenuItem Component ──────────────────────────────────────────────────────
function MenuItem({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description?: string;
}) {
  return (
    <div
      style={{
        padding: "1rem",
        borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
      }}
      className="reveal"
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#F5ECD7",
            marginBottom: description ? "0.25rem" : 0,
          }}
        >
          {name}
        </p>
        {description && (
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(245, 236, 215, 0.5)",
              fontStyle: "italic",
            }}
          >
            {description}
          </p>
        )}
      </div>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#D4AF37",
          whiteSpace: "nowrap",
        }}
      >
        {price}
      </span>
    </div>
  );
}

// ─── Scroll Reveal Hook ─────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll(".reveal, .fade-in, .slide-in-left, .slide-in-right, .stagger-item");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Header ─────────────────────────────────────────────────────────────────
function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 300ms ease, box-shadow 300ms ease",
        background: "rgba(30, 11, 11, 0.0)",
        backdropFilter: "blur(0px)",
      }}
      className="header-component"
    >
      <style>{`
        .header-component.scrolled {
          background: rgba(30, 11, 11, 0.96) !important;
          backdrop-filter: blur(12px) !important;
          box-shadow: 0 1px 0 rgba(212, 175, 55, 0.15);
        }
      `}</style>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        {/* Logo */}
        <a
          href="#inicio"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#BE5A83" }}>BON</span>
          <span style={{ color: "#B87333" }}>CREPE</span>
        </a>

        {/* Nav */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
          className="hidden md:flex"
        >
          {[
            { href: "#inicio", label: "Início" },
            { href: "#cardapio", label: "Cardápio" },
            { href: "#historia", label: "Nossa História" },
            { href: "#contato", label: "Contato" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              style={{
                color: "rgba(245, 236, 215, 0.8)",
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#D4AF37")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(245, 236, 215, 0.8)")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={WA_GERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press hidden md:flex"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#25D366",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            textDecoration: "none",
            transition:
              "background 200ms ease, transform 200ms cubic-bezier(0.23,1,0.32,1), box-shadow 200ms ease",
            boxShadow: "0 4px 15px rgba(37, 211, 102, 0.35)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "#1da851";
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.45)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "#25D366";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.35)";
          }}
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#D4AF37",
            fontSize: "1.5rem",
          }}
          className="md:hidden"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          style={{
            display: "block",
            background: "rgba(30, 11, 11, 0.98)",
            backdropFilter: "blur(12px)",
            padding: "1.5rem 1rem",
            borderTop: "1px solid rgba(212, 175, 55, 0.1)",
            animation: "slideInDown 300ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
          className="md:hidden"
        >
          <style>{`
            @keyframes slideInDown {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {[
              { href: "#inicio", label: "Início" },
              { href: "#cardapio", label: "Cardápio" },
              { href: "#historia", label: "Nossa História" },
              { href: "#contato", label: "Contato" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "rgba(245, 236, 215, 0.8)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                  padding: "0.5rem 0",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245, 236, 215, 0.8)")
                }
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={HERO_IMG}
          alt="Crepe Gourmet Boncrepe"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(30,11,11,0.55) 0%, rgba(30,11,11,0.75) 50%, rgba(30,11,11,1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
          animation: "heroFadeIn 1s cubic-bezier(0.23,1,0.32,1) forwards",
        }}
      >
        <style>{`
          @keyframes heroFadeIn {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            color: "#F5ECD7",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Bon{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, #B87333 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Crêpe
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(245, 236, 215, 0.8)",
            maxWidth: "580px",
            margin: "0 auto 1.5rem",
            lineHeight: 1.8,
          }}
        >
          A tradição francesa no jeito <strong>brasileiro de ser</strong>
        </p>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "rgba(245, 236, 215, 0.7)",
            maxWidth: "580px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
          }}
        >
          Sabores irresistíveis, aconchego de verdade.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#cardapio"
            className="btn-press"
            style={{
              background: "#BE5A83",
              color: "#fff",
              padding: "0.85rem 2.5rem",
              borderRadius: "9999px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              transition:
                "background 200ms ease, transform 200ms cubic-bezier(0.23,1,0.32,1), box-shadow 200ms ease",
              boxShadow: "0 6px 20px rgba(190, 90, 131, 0.4)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#a8476f";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 30px rgba(190, 90, 131, 0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#BE5A83";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 6px 20px rgba(190, 90, 131, 0.4)";
            }}
          >
            Ver Cardápio
          </a>
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press"
            style={{
              background: "transparent",
              color: "#D4AF37",
              padding: "0.85rem 2.5rem",
              borderRadius: "9999px",
              border: "2px solid #D4AF37",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              transition:
                "background 200ms ease, color 200ms ease, transform 200ms cubic-bezier(0.23,1,0.32,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#D4AF37";
              el.style.color = "#1E0B0B";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#D4AF37";
              el.style.transform = "translateY(0)";
            }}
          >
            Explorar
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "bounce 2s infinite",
        }}
      >
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(6px); }
          }
        `}</style>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(212,175,55,0.8), transparent)",
          }}
        />
      </div>
    </section>
  );
}

// ─── Diferenciais Section ────────────────────────────────────────────────────
function DiferenciaisSection() {
  const items = [
    {
      icon: "❤️",
      title: "Feito com Amor",
      desc: "Cada crepe preparado na hora, com ingredientes frescos e o cuidado de quem ama o que faz.",
    },
    {
      icon: "✨",
      title: "Receitas Francesas",
      desc: "A autenticidade das creperies parisienses com o sabor e o calor do Brasil.",
    },
    {
      icon: "👥",
      title: "Atendimento Especial",
      desc: "Um espaço acolhedor pensado para você se sentir em casa desde o primeiro momento.",
    },
    {
      icon: "⏱️",
      title: "Rápido & Fresquinho",
      desc: "Massa na chapa toda hora — crocante, levinha e quentinha, do jeito que tem que ser.",
    },
  ];

  return (
    <section
      style={{
        padding: "5rem 0",
        background: "#1E0B0B",
        borderTop: "1px solid rgba(212, 175, 55, 0.1)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="reveal stagger-item"
              style={{
                transitionDelay: `${i * 80}ms`,
                padding: "2rem 1.5rem",
                borderRadius: "1rem",
                background: "rgba(46, 20, 20, 0.6)",
                border: "1px solid rgba(255,255,255,0.06)",
                textAlign: "center",
                transition:
                  "background 200ms ease, border-color 200ms ease, transform 200ms cubic-bezier(0.23,1,0.32,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(46, 20, 20, 1)";
                el.style.borderColor = "rgba(212, 175, 55, 0.25)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(46, 20, 20, 0.6)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#F5ECD7",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(245, 236, 215, 0.55)",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Cardápio Section ────────────────────────────────────────────────────────
function CardapioSection() {
  const [activeTab, setActiveTab] = useState("salgados");

  const cardapioData = {
    salgados: {
      title: "Crepes Salgados",
      subtitle: "Os Clássicos de Paris",
      items: [
        { name: "Suíço (Tradicional)", price: "R$ 10,00" },
        { name: "Francês", price: "R$ 25,00" },
      ],
    },
    doces: {
      title: "Crepes Doces",
      subtitle: "Delícias Indulgentes",
      items: [
        { name: "Suíço (Tradicional)", price: "R$ 12,00" },
        { name: "Francês", price: "R$ 30,00" },
      ],
    },
    combos: {
      title: "Combos",
      subtitle: "Ofertas Especiais",
      items: [
        {
          name: "Combo Café + Salgado",
          price: "R$ 15,00",
          description: "Qualquer salgado + Café Expresso ou Café com Leite",
        },
        {
          name: "Combo Expresso + Pão de Queijo",
          price: "R$ 10,00",
        },
      ],
    },
    cafeteria: {
      title: "Salgados e Cafeteria",
      subtitle: "Acompanhamentos",
      items: [
        { name: "Pão de Queijo Gourmet", price: "R$ 6,00" },
        { name: "Croissants / Pizza Francesa", price: "R$ 10,00" },
        { name: "Café Expresso", price: "R$ 5,00" },
        { name: "Café com Leite", price: "R$ 7,50" },
      ],
    },
    bebidas: {
      title: "Bebidas",
      subtitle: "Refrescos e Bebidas Especiais",
      items: [
        { name: "Água Mineral", price: "R$ 3,50" },
        { name: "Refrigerantes (Lata)", price: "R$ 6,00" },
        { name: "H2OH Lata", price: "R$ 7,00" },
        { name: "Mansão Maromba", price: "R$ 20,00" },
        { name: "Del Valle Lata", price: "R$ 7,00" },
        { name: "Cerveja Amstel", price: "R$ 5,00" },
        { name: "Cerveja Heineken", price: "R$ 7,00" },
        { name: "Energético (Monster / Red Bull)", price: "R$ 15,00" },
      ],
    },
  };

  return (
    <section
      id="cardapio"
      style={{
        padding: "6rem 0",
        background: "#1E0B0B",
        position: "relative",
      }}
    >
      {/* Velvet glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Section header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#F5ECD7",
              marginBottom: "1.25rem",
            }}
          >
            Cardápio Completo
          </h2>
          <div className="gold-divider">
            <span style={{ color: "#D4AF37", fontSize: "0.8rem" }}>◆</span>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          style={{
            background: "rgba(46, 20, 20, 0.4)",
            borderRadius: "1.5rem",
            padding: "2rem",
            border: "1px solid rgba(212, 175, 55, 0.15)",
          }}
        >
          <TabsList
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              background: "transparent",
              border: "none",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "salgados", label: "Salgados" },
              { value: "doces", label: "Doces" },
              { value: "combos", label: "Combos" },
              { value: "cafeteria", label: "Cafeteria" },
              { value: "bebidas", label: "Bebidas" },
            ].map(({ value, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  background: "transparent",
                  color: "rgba(245, 236, 215, 0.6)",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== value) {
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(212, 175, 55, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== value) {
                    (e.target as HTMLElement).style.borderColor =
                      "rgba(212, 175, 55, 0.2)";
                  }
                }}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          {Object.entries(cardapioData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#F5ECD7",
                    marginBottom: "0.25rem",
                  }}
                >
                  {data.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.85rem",
                    color: "#B87333",
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  {data.subtitle}
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "1rem",
                  }}
                >
                  {data.items.map((item, i) => (
                    <div
                      key={i}
                      className="reveal stagger-item"
                      style={{
                        transitionDelay: `${i * 80}ms`,
                      }}
                    >
                      <MenuItem
                        name={item.name}
                        price={item.price}
                        description={
                          "description" in item ? item.description : undefined
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "3.5rem",
          }}
        >
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#25D366",
              color: "#fff",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 200ms ease",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1da851";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#25D366";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 15px rgba(37, 211, 102, 0.3)";
            }}
          >
            <WhatsAppIcon size={16} />
            Fazer Pedido
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Nossa História Section ─────────────────────────────────────────────────
function NossaHistoriaSection() {
  return (
    <section
      id="historia"
      style={{
        padding: "6rem 0",
        background: "#2E1414",
        borderTop: "1px solid rgba(212, 175, 55, 0.1)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.1)",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {/* Text */}
          <div className="reveal">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#F5ECD7",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Nossa História
            </h2>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem",
                fontStyle: "italic",
                color: "#D4AF37",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              Criados com paixão,<br />servidos com amor.
            </p>

            <div
              style={{
                width: "48px",
                height: "2px",
                background: "linear-gradient(90deg, #D4AF37, transparent)",
                marginBottom: "1.5rem",
              }}
            />

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: "rgba(245, 236, 215, 0.75)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              Nascida do amor pela culinária francesa, a Bon Crêpe traz para o
              Brasil a autenticidade das crêperies parisienses com o calor e a
              criatividade tipicamente brasileira. Cada crepe é uma obra de arte
              comestível.
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: "rgba(245, 236, 215, 0.75)",
                lineHeight: 1.9,
              }}
            >
              Usamos apenas ingredientes frescos e selecionados, preparados na
              hora com muito carinho. Porque acreditamos que comida boa é aquela
              feita com alma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contato Section ─────────────────────────────────────────────────────────
function ContatoSection() {
  return (
    <section
      id="contato"
      style={{
        padding: "6rem 0",
        background: "#1E0B0B",
        borderTop: "1px solid rgba(212, 175, 55, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(190,90,131,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div
          className="reveal"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#F5ECD7",
              marginBottom: "1.25rem",
            }}
          >
            Entre em Contato
          </h2>
          <div className="gold-divider" style={{ marginBottom: "2rem" }}>
            <span style={{ color: "#D4AF37", fontSize: "0.8rem" }}>◆</span>
          </div>

          {/* Contact cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { icon: "📱", label: "WhatsApp", value: "(11) 92205-3411" },
              {
                icon: "🕐",
                label: "Horário",
                value: "Ter–Dom: 11h às 20h\nFechado segunda",
              },
              {
                icon: "📍",
                label: "Endereço",
                value: "Av João Paulo II, 1517\nCasa Branca",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem 1rem",
                  background: "rgba(46, 20, 20, 0.6)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#B87333",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(245, 236, 215, 0.8)",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#25D366",
              color: "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              textDecoration: "none",
              transition:
                "background 200ms ease, transform 200ms cubic-bezier(0.23,1,0.32,1), box-shadow 200ms ease",
              boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#1da851";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 30px rgba(37, 211, 102, 0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#25D366";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.35)";
            }}
          >
            <WhatsAppIcon size={20} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "#130707",
        borderTop: "1px solid rgba(212, 175, 55, 0.1)",
        padding: "2.5rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <a
          href="#inicio"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          <span style={{ color: "#BE5A83" }}>BON</span>
          <span style={{ color: "#B87333" }}>CREPE</span>
        </a>

        {/* Social Links */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "0.5rem",
          }}
        >
          <a
            href="https://www.instagram.com/boncrepecreperrie/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(212, 175, 55, 0.15)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              color: "#D4AF37",
              textDecoration: "none",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#D4AF37";
              el.style.color = "#1E0B0B";
              el.style.borderColor = "#D4AF37";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(212, 175, 55, 0.15)";
              el.style.color = "#D4AF37";
              el.style.borderColor = "rgba(212, 175, 55, 0.3)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(37, 211, 102, 0.15)",
              border: "1px solid rgba(37, 211, 102, 0.3)",
              color: "#25D366",
              textDecoration: "none",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#25D366";
              el.style.color = "#fff";
              el.style.borderColor = "#25D366";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(37, 211, 102, 0.15)";
              el.style.color = "#25D366";
              el.style.borderColor = "rgba(37, 211, 102, 0.3)";
            }}
          >
            <WhatsAppIcon size={20} />
          </a>
        </div>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(245, 236, 215, 0.35)",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} Boncrepe. Todos os direitos reservados.
        </p>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.7rem",
            color: "rgba(245, 236, 215, 0.2)",
            fontStyle: "italic",
          }}
        >
          Sabores que aquecem a alma
        </p>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1E0B0B",
        color: "#F5ECD7",
      }}
    >
      <Header />
      <HeroSection />
      <DiferenciaisSection />
      <CardapioSection />
      <NossaHistoriaSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}
