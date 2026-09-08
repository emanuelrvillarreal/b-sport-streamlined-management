import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Users,
  CreditCard,
  CalendarDays,
  Trophy,
  Bell,
  BarChart3,
  Building2,
  Dumbbell,
  MapPin,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Clock,
  SlidersHorizontal,
  MapPinned,
} from "lucide-react";
import fullLogoAsset from "../assets/bsport-logo.png.asset.json";
import iconLogoAsset from "../assets/bsport-logo-icon.png.asset.json";
import dashboardAsset from "../assets/bsport-dashboard.png.asset.json";

const WHATSAPP_NUMBER = "5491143991220";
const WHATSAPP_MESSAGE = "Hola, quiero conocer más sobre B Sport";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 9.747c-.233-.615-1.169-1.14-1.862-1.14h-.003c-.233 0-.466.035-.669.14-.267.14-.502.385-.641.653-.14.267-.21.502-.21.77 0 .267.07.536.21.77.14.268.374.513.641.653.203.105.436.14.669.14.693 0 1.629-.525 1.862-1.14v.004zM12.876 10.553c.233 0 .466-.035.669-.14.268-.14.502-.385.641-.653.14-.267.21-.502.21-.77 0-.267-.07-.536-.21-.77-.14-.268-.374-.513-.641-.653-.203-.105-.436-.14-.669-.14h-.003c-.693 0-1.629.525-1.862 1.14-.233.615.233 1.283.926 1.283.21 0 .43-.018.64-.097z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.06 2.284 7.045L.762 23.553l4.853-1.318A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.54 16.74c-.262.74-1.529 1.355-2.128 1.446-.57.086-1.146.15-3.404-.733-2.876-1.18-4.713-4.134-4.852-4.333-.138-.198-1.16-1.543-1.16-2.943 0-1.4.733-2.083.992-2.37.26-.286.57-.37.76-.37.19 0 .38.003.547.006.175.002.41-.066.64.49.228.553.78 1.917.848 2.057.069.14.115.303.023.49-.092.186-.138.303-.276.467-.138.163-.29.343-.415.462-.138.13-.282.272-.122.534.16.262.71 1.17 1.524 1.893 1.045.928 1.92 1.216 2.186 1.348.267.133.422.11.578-.066.156-.176.668-.78.846-1.048.178-.267.356-.222.594-.133.238.09 1.533.72 1.796.85.262.13.437.196.502.306.064.11.064.638-.198 1.378z"
      />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "B Sport — App de gestión integral para clubes deportivos" },
      {
        name: "description",
        content:
          "Centralizá la administración de tu club, gimnasio o cancha con B Sport: socios, tesorería, cuotas, instructores, actividades, reservas y comunicaciones en una sola plataforma.",
      },
      {
        property: "og:title",
        content: "B Sport — App de gestión integral para clubes deportivos",
      },
      {
        property: "og:description",
        content:
          "Centralizá la administración de tu club con B Sport. Socios, tesorería, cuotas, instructores, actividades y comunicaciones en un solo lugar.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "¿Para quién?", href: "#publico" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

function Logo({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "icon";
  className?: string;
}) {
  const asset = variant === "icon" ? iconLogoAsset : fullLogoAsset;
  return (
    <img
      src={asset.url}
      alt="B Sport"
      className={`object-contain ${className}`}
    />
  );
}

function WhatsAppButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/35",
    accent:
      "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-accent/35",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
    ghost:
      "text-foreground hover:bg-secondary",
  };

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg md:p-8">
      <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={28} strokeWidth={2} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-card-foreground">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function AudienceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md md:p-8">
      <div className="mb-5 inline-flex w-fit rounded-xl bg-accent/10 p-3 text-accent">
        <Icon size={32} strokeWidth={2} />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-card-foreground">{title}</h3>
      <p className="flex-1 leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 rounded-full bg-accent/10 p-2 text-accent">
        <CheckCircle size={24} strokeWidth={2.5} />
      </div>
      <p className="text-lg font-medium text-foreground">{text}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-col items-start rounded-2xl border border-border bg-card p-6 text-left shadow-sm md:p-8">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">
        {step}
      </span>
      <h3 className="mb-2 text-xl font-bold text-card-foreground">{title}</h3>
      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <Logo variant="icon" className="h-10 w-auto md:h-12" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton variant="primary" size="sm">
            <WhatsAppIcon size={18} />
            Hablemos
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-b border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton variant="primary" size="md" className="w-full">
              <WhatsAppIcon size={20} />
              Hablemos por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden gradient-hero pb-20 pt-28 md:pt-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <Logo
                variant="full"
                className="h-16 w-auto md:h-20 lg:h-24"
              />
            </h1>
            <p className="mt-4 text-balance text-2xl font-semibold text-primary sm:text-3xl">
              App de gestión integral para clubes deportivos
            </p>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
              Centralizá la administración de tu club: tesorería, cuotas,
              membresías, instructores, actividades y comunicaciones en una sola
              plataforma.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton variant="accent" size="lg" className="w-full sm:w-auto">
                <WhatsAppIcon size={22} />
                Hablemos por WhatsApp
              </WhatsAppButton>
              <a
                href="#funcionalidades"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto"
              >
                Quiero conocer más
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
              <img
                src={dashboardAsset.url}
                alt="Dashboard de B Sport"
                className="h-full w-full object-cover object-left-top"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Users,
      title: "Gestión de socios y membresías",
      description:
        "Altas, bajas, búsqueda avanzada, grupos familiares y estados claros: activo, moroso o suspendido.",
    },
    {
      icon: CreditCard,
      title: "Tesorería y cobranzas",
      description:
        "Cuotas personalizadas, generación automática mensual, control de morosidad y registro de egresos.",
    },
    {
      icon: CalendarDays,
      title: "Profesores",
      description:
        "Asignación a actividades, horarios, disponibilidad y seguimiento centralizado del equipo.",
    },
    {
      icon: Trophy,
      title: "Actividades, reservas y amenities",
      description:
        "Inscripciones, cupos, categorías, reserva de espacios y amenities desde un solo lugar.",
    },
    {
      icon: CreditCard,
      title: "Cobros con Mercado Pago",
      description:
        "Integración con Mercado Pago para cobros simples, seguros y automatizados: tarjetas, dinero en cuenta y cuotas.",
    },
    {
      icon: Bell,
      title: "Eventos y comunicaciones",
      description:
        "Notificaciones vía WhatsApp, consentimientos digitales y avisos masivos a socios.",
    },
    {
      icon: BarChart3,
      title: "Reportes y control administrativo",
      description:
        "Métricas claras y reportes exportables para tomar decisiones con datos reales.",
    },
  ];

  return (
    <section id="funcionalidades" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Todo lo que tu club necesita"
          subtitle="Herramientas pensadas para simplificar la gestión diaria y dejar atrás las planillas sueltas."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="publico" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="¿Para quién es B Sport?"
          title="Se adapta a tu institución"
          subtitle="Cada organización es distinta. Por eso B Sport se adapta al tipo de institución, ofreciendo las herramientas que realmente necesita."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AudienceCard
            icon={Building2}
            title="Clubes"
            description="Gestión integral de socios, familias, cuotas sociales, amenities y actividades deportivas."
          />
          <AudienceCard
            icon={Dumbbell}
            title="Gimnasios"
            description="Control de membresías, clases, instructores y accesos con seguimiento de asistencias."
          />
          <AudienceCard
            icon={MapPin}
            title="Canchas"
            description="Reservas, turnos y cobros simplificados para complejos deportivos y alquileres."
          />
          <AudienceCard
            icon={GraduationCap}
            title="Escuelas deportivas"
            description="Gestión de alumnos, profesores, grupos por edad, categorías y seguimiento de pagos."
          />
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Por qué elegir B Sport"
              title="Menos papeleo, más deporte"
              centered={false}
            />
            <div className="mt-8 space-y-6">
              <BenefitItem text="Todo en un solo lugar: se acabaron las planillas sueltas y los sistemas desconectados." />
              <BenefitItem text="Menos carga operativa, más tiempo para el deporte y tus socios." />
              <BenefitItem text="Se adapta a tu institución, no al revés. Clubes, gimnasios, canchas y escuelas deportivas." />
              <BenefitItem text="Pensado y desarrollado en Argentina, con soporte cercano y real." />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl md:p-10">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground">
                      Seguridad y confianza
                    </h4>
                    <p className="mt-1 text-muted-foreground">
                      Datos protegidos, respaldos automáticas y permisos por rol.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-accent/10 p-3 text-accent">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground">
                      Ahorro de tiempo
                    </h4>
                    <p className="mt-1 text-muted-foreground">
                      Automatizá cobros, recordatorios y reportes en minutos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                    <SlidersHorizontal size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground">
                      Flexible y configurable
                    </h4>
                    <p className="mt-1 text-muted-foreground">
                      Ajustá cuotas, categorías, disciplinas y reglas a tu medida.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-accent/10 p-3 text-accent">
                    <MapPinned size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-card-foreground">
                      Soporte local
                    </h4>
                    <p className="mt-1 text-muted-foreground">
                      Te acompañamos en la implementación y en el día a día.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Empezar es simple"
          subtitle="Tres pasos para dejar atrás el papeleo y empezar a gestionar tu club como corresponde."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <StepCard
            step="1"
            title="Contanos sobre tu club"
            description="Nos contás qué tipo de institución tenés, cuántos socios manejás y qué procesos querés mejorar."
          />
          <StepCard
            step="2"
            title="Configuramos B Sport a tu medida"
            description="Ajustamos la plataforma con tus cuotas, actividades, espacios y reglas de negocio."
          />
          <StepCard
            step="3"
            title="Empezás a gestionar todo"
            description="Usás una sola plataforma para socios, cobros, reservas, comunicaciones y reportes."
          />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.6_0.16_250)_0%,oklch(0.5_0.16_250)_100%)]" />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
          ¿Listo para simplificar la gestión de tu club?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-primary-foreground/90 md:text-xl">
          Contanos sobre tu institución y te mostramos cómo B Sport puede
          ayudarte.
        </p>
        <div className="mt-10">
          <WhatsAppButton
            variant="accent"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <WhatsAppIcon size={24} />
            Escribinos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>

          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
            >
              <WhatsAppIcon size={18} />
              WhatsApp: +54 9 11 4399-1220
            </a>
            <span className="hidden md:inline">·</span>
            <span>Argentina</span>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} B Sport. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Audience />
        <Benefits />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
