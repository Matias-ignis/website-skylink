'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from 'react';
import { Shield, ChefHat, Globe, Stethoscope, Scale, TrendingUp, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { DemoRequestForm } from "@/components/DemoRequestForm";

// ─── Animation Variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// ═══════════════════════════════════════════
// 1. HERO SECTION — El Nodo Central
// ═══════════════════════════════════════════
function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden"
      initial="hidden" animate="visible" variants={stagger}
    >
      {/* Decorative gold lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container relative z-10 text-center py-20">
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-widest uppercase bg-primary/5">
            Ecosistema ERP Inteligente
          </span>
        </motion.div>

        <motion.h1 variants={item} className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          <span className="text-gradient-gold">Skylink:</span>{' '}
          <span className="text-foreground">El Enlace Inteligente</span>
          <br />
          <span className="text-foreground">para tu Negocio.</span>
        </motion.h1>

        <motion.p variants={item} className="max-w-[750px] mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
          Una plataforma modular de alta seguridad que conecta la gestión administrativa, la operación gastronómica y la inteligencia de datos en un solo ecosistema de trazabilidad total.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="shimmer-btn px-8 py-6 text-lg font-semibold" asChild>
            <a href="#contact">Solicitar Demo Gratuita</a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/5 hover:border-primary/60" asChild>
            <a href="#verticales">Explorar Verticales <ArrowRight className="ml-2 h-5 w-5" /></a>
          </Button>
        </motion.div>

        {/* Traceability visual — 3 connected nodes */}
        <motion.div variants={item} className="mt-16 flex items-center justify-center gap-8 md:gap-16">
          {[
            { label: 'Finanzas', icon: <TrendingUp className="h-6 w-6" /> },
            { label: 'Inventario', icon: <Shield className="h-6 w-6" /> },
            { label: 'Ventas', icon: <Sparkles className="h-6 w-6" /> },
          ].map((node, i) => (
            <React.Fragment key={node.label}>
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-full border border-primary/40 flex items-center justify-center text-primary bg-primary/5 group-hover:glow-gold-strong group-hover:border-primary transition-all duration-300">
                  {node.icon}
                </div>
                <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">{node.label}</span>
              </div>
              {i < 2 && <div className="h-px w-12 md:w-24 bg-gradient-to-r from-primary/50 to-primary/20 self-center -mt-6" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// 2. PROBLEMÁTICA + MISIÓN + DIFERENCIACIÓN
// ═══════════════════════════════════════════
function ValuePropositionSection() {
  const cards = [
    {
      title: '¿Qué problemática solucionamos?',
      text: 'Empresas que crecen más rápido que sus sistemas terminan con información fragmentada, costos invisibles y decisiones basadas en intuición. La falta de trazabilidad convierte el crecimiento en un riesgo.',
      accent: 'border-red-500/30',
    },
    {
      title: '¿Qué buscamos hacer?',
      text: 'Construir un ecosistema tecnológico modular que centralice la operación, automatice procesos críticos y entregue visibilidad total del negocio en tiempo real, sin depender de herramientas desconectadas.',
      accent: 'border-primary/40',
    },
    {
      title: 'Nuestra diferencia',
      text: 'Gracias a nuestro "Link de Trazabilidad", la información fluye desde la venta más pequeña hasta el asiento contable más complejo sin perder un solo dato. Todo conectado, todo auditable, todo inteligente.',
      accent: 'border-emerald-500/30',
    },
  ];

  return (
    <motion.section
      className="w-full py-20 md:py-28 border-t border-border/50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
    >
      <div className="container">
        <motion.div className="grid gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {cards.map(card => (
            <motion.div
              key={card.title}
              variants={item}
              className={`relative p-8 rounded-xl bg-card/50 border-l-4 ${card.accent} hover:bg-card/80 transition-all duration-300 group`}
            >
              <h3 className="font-headline text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// 3. VERTICALES — Grid de Impacto
// ═══════════════════════════════════════════
function VerticalesSection() {
  const adminFeatures = [
    'Auditoría de Precisión: Rastreo completo de acciones por usuario.',
    'Seguridad RBAC: Control de acceso basado en roles granulares.',
    'Dashboard financiero con KPIs de patrimonio neto en tiempo real.',
  ];
  const restaurantFeatures = [
    'Mesero Virtual IA: Pedidos en lenguaje natural que reducen errores.',
    'Control de Insumos: Stock sincronizado, platos pausados automáticamente.',
    'Cierre de Caja Cero Fricción: Cuadre exacto sin descuadres.',
  ];
  const webFeatures = [
    'Diseño responsive integrado a tu inventario Skylink.',
    'Sincronización de catálogo en tiempo real.',
    'Pasarelas de pago blindadas y seguras.',
  ];

  return (
    <motion.section
      id="verticales"
      className="w-full py-20 md:py-28 border-t border-border/50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}
    >
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Nuestros Productos</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">Verticales especializadas que se adaptan a cada industria, unidas por un núcleo de trazabilidad total.</p>
        </div>

        <motion.div className="grid gap-8 lg:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {/* Sky Administrativa */}
          <motion.div variants={item} className="group relative rounded-2xl p-8 bg-card border border-border/50 hover:border-muted-foreground/20 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center"><Shield className="h-6 w-6 text-muted-foreground" /></div>
                <div>
                  <h3 className="font-headline text-xl font-bold">Sky Administrativa</h3>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">El Cerebro Operativo</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">No es solo un ERP, es el blindaje operativo de tu empresa. Controla cada movimiento financiero con un sistema diseñado para la transparencia absoluta.</p>
              <ul className="space-y-2 mb-5">
                {adminFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 text-xs font-medium text-muted-foreground">
                <Brain className="h-3.5 w-3.5" /> IA Ready: Detección de anomalías en flujos de caja
              </div>
            </div>
          </motion.div>

          {/* Sky Restaurante */}
          <motion.div variants={item} className="group relative rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"><ChefHat className="h-6 w-6 text-primary" /></div>
                <div>
                  <h3 className="font-headline text-xl font-bold">Sky Restaurante</h3>
                  <span className="text-xs text-primary/70 tracking-wider uppercase">La Especialista</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">Optimiza la experiencia de tus clientes y el flujo de tu cocina. Desde el pedido inteligente hasta el cierre de caja perfecto.</p>
              <ul className="space-y-2 mb-5">
                {restaurantFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" /> IA Core: Predicción de demanda semanal
              </div>
            </div>
          </motion.div>

          {/* Skylink Web */}
          <motion.div variants={item} className="group relative rounded-2xl p-8 bg-card border border-border/50 hover:border-muted-foreground/20 transition-all duration-500 overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center"><Globe className="h-6 w-6 text-muted-foreground" /></div>
                <div>
                  <h3 className="font-headline text-xl font-bold">Skylink Web</h3>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">Tu vitrina conectada</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-5">Creamos tu presencia online totalmente integrada a tu inventario y ventas de Skylink. Una sola base de datos, infinitas posibilidades.</p>
              <ul className="space-y-2">
                {webFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.div variants={item} className="relative rounded-2xl p-8 border border-dashed border-primary/20 bg-card/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
            <div className="relative z-10">
              <h3 className="font-headline text-xl font-bold mb-2 text-foreground/70">El Ecosistema sigue Creciendo</h3>
              <p className="text-muted-foreground text-sm mb-6">Estamos trabajando en verticales especializadas para nuevas industrias. La misma potencia de Skylink, adaptada a nuevos sectores.</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: <Stethoscope className="h-4 w-4" />, label: 'Salud' },
                  { icon: <Scale className="h-4 w-4" />, label: 'Legal' },
                ].map(v => (
                  <span key={v.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/15 text-xs text-muted-foreground/70 bg-card/40">
                    {v.icon} {v.label}
                  </span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40">
                Avísame cuando esté disponible
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// 4. TRAZABILIDAD — ¿Por qué Skylink?
// ═══════════════════════════════════════════
function TrazabilidadSection() {
  return (
    <motion.section
      id="trazabilidad"
      className="w-full py-20 md:py-28 border-t border-border/50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span variants={item} className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium tracking-widest uppercase bg-primary/5 mb-6">
            Trazabilidad Integrada
          </motion.span>
          <motion.h2 variants={item} className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">¿Por qué Skylink?</motion.h2>
          <motion.p variants={item} className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
            Nuestra diferencia no es solo lo que el software hace, sino <span className="text-primary font-semibold">cómo lo conecta</span>. Gracias a nuestro Link de Trazabilidad, la información fluye desde la venta más pequeña en un salón de restaurante hasta el asiento contable más complejo en tu administración central, sin perder un solo dato en el camino.
          </motion.p>
          {/* Visual flow */}
          <motion.div variants={item} className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {['Venta', 'Inventario', 'Finanzas', 'Auditoría', 'Decisión'].map((step, i) => (
              <React.Fragment key={step}>
                <span className="px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 text-sm font-medium text-foreground">{step}</span>
                {i < 4 && <ArrowRight className="h-4 w-4 text-primary/40 flex-shrink-0" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// 5. IA APLICADA
// ═══════════════════════════════════════════
function IASection() {
  const capabilities = [
    { title: 'Detección de Anomalías', desc: 'Algoritmos que identifican automáticamente fugas de capital y comportamientos atípicos en flujos financieros.', status: 'IA Ready' },
    { title: 'Mesero Virtual', desc: 'Toma de pedidos en lenguaje natural que reduce errores humanos y acelera el servicio al cliente.', status: 'IA Activa' },
    { title: 'Predicción de Demanda', desc: 'Optimización de inventario basada en predicción de demanda semanal para reducir desperdicios.', status: 'IA Core' },
    { title: 'Auditoría Inteligente', desc: 'Rastreo completo y automatizado de cada acción, identificando quién, cuándo y dónde ocurrió cada movimiento.', status: 'IA Ready' },
  ];

  return (
    <motion.section
      id="ia"
      className="w-full py-20 md:py-28 border-t border-border/50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
    >
      <div className="container">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium tracking-widest uppercase bg-primary/5 mb-4">Inteligencia Artificial</span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">IA Aplicada al Negocio Real</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground text-lg">No es IA decorativa. Es inteligencia integrada en cada capa del ecosistema para potenciar decisiones concretas.</p>
        </div>
        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {capabilities.map(cap => (
            <motion.div key={cap.title} variants={item} className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:glow-gold transition-all duration-300">
              <Brain className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-base font-bold mb-2">{cap.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cap.desc}</p>
              <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{cap.status}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// 6. SOBRE NOSOTROS
// ═══════════════════════════════════════════
function AboutSection() {
  return (
    <motion.section
      id="empresa"
      className="w-full py-20 md:py-28 border-t border-border/50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Construimos tecnología pensada para operar</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Skylink nace de necesidades reales de control, trazabilidad y crecimiento operativo. Con el tiempo, evolucionó hasta convertirse en un ecosistema diseñado para acompañar a empresas en su operación diaria.</p>
            <p>Hoy, Skylink se construye con foco en estabilidad, escalabilidad y evolución continua del producto.</p>
          </div>
          <div className="border-t border-border/50 pt-8 mt-4">
            <p className="text-xl font-semibold text-foreground font-headline">
              Más que vender software, construimos una plataforma que se adapta a la forma real en que operan las empresas.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// 7. CONTACTO — Comunícanos
// ═══════════════════════════════════════════
function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="w-full py-20 md:py-28 border-t border-border/50"
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">¿Listo para conectar tu negocio?</h2>
          <p className="text-muted-foreground text-lg">Nuestro equipo de expertos está listo para configurar tu instancia de Skylink a la medida de tus necesidades.</p>
        </div>
        {/* Premium wrapper around existing form */}
        <div className="mx-auto w-full max-w-2xl relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20 pointer-events-none" />
          <div className="relative rounded-2xl bg-card p-8 md:p-10 border border-border/50">
            <DemoRequestForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ═══════════════════════════════════════════
// PAGE EXPORT
// ═══════════════════════════════════════════
export default function SkylinkLandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <main className="flex-1">
        <HeroSection />
        <ValuePropositionSection />
        <VerticalesSection />
        <TrazabilidadSection />
        <IASection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="w-full shrink-0 border-t border-border/50 bg-card/30">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="font-headline font-bold text-sm">
              <span className="text-gradient-gold">Sky</span><span className="text-foreground">link</span>
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <p>&copy; {new Date().getFullYear()} Skylink Solutions Inc.</p>
            <span className="hidden sm:inline text-border">|</span>
            <p>Operando en Latinoamérica</p>
          </div>
          <nav className="flex gap-4">
            <a href="mailto:contacto@skylink.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">contacto@skylink.com</a>
            <a href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
