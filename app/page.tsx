'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig, Database, FileCog, ScanSearch, Waypoints, Crosshair, Workflow, Truck, Boxes, Puzzle, SlidersHorizontal, Globe, FileText, FileSearch2, Settings2, DatabaseBackup, UserCheck, PlayCircle, Archive, History, Construction, Sigma, Server, ShieldCheck, ClipboardList, HardDrive, ScanLine, CloudCog, Lock, GitBranch, Component, Landmark, FilePlus2 } from 'lucide-react';
import Image from "next/image";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { motion } from "framer-motion";
import React from 'react';

// Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};


function HeroSection() {
  return (
    <motion.section 
      id="hero" 
      className="w-full py-20 md:py-32 lg:py-40 bg-background"
      initial="hidden"
      animate="visible"
      variants={{
        ...staggerContainer,
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
          },
        },
      }}
    >
      <div className="container text-center">
        <div 
          className="flex flex-col justify-center items-center space-y-6"
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none text-foreground"
            variants={itemVariant}
          >
            <span className="block">Centraliza tu operación.</span>
            <span className="block text-primary">Gana trazabilidad.</span>
            <span className="block">Escala sin perder control.</span>
          </motion.h1>
          <motion.p 
            className="max-w-[800px] text-muted-foreground md:text-xl/relaxed"
            variants={itemVariant}
          >
            Skylink es un ecosistema ERP SaaS configurable que automatiza inventario, compras y procesos operativos, adaptándose a la forma real en que trabaja tu empresa.
          </motion.p>
          <motion.div 
            className="flex flex-col gap-4 min-[400px]:flex-row"
            variants={itemVariant}
          >
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <a href="#contact">Solicitar demo guiada</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
              <a href="#modules">Explorar cómo funciona</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ProblemSection() {
  const problems = [
    { description: "No saber el costo real de los productos", icon: <Sigma className="h-7 w-7 text-muted-foreground" /> },
    { description: "Gestión manual de inventario y costos", icon: <FileCog className="h-7 w-7 text-muted-foreground" /> },
    { description: "Compras sin visibilidad ni seguimiento", icon: <ScanSearch className="h-7 w-7 text-muted-foreground" /> },
    { description: "Información crítica repartida en planillas y herramientas desconectadas", icon: <Waypoints className="h-7 w-7 text-muted-foreground" /> },
    { description: "Dificultad para tomar decisiones con datos confiables", icon: <Crosshair className="h-7 w-7 text-muted-foreground" /> },
    { description: "Sin trazabilidad, el crecimiento deja de ser una ventaja y se transforma en un problema.", icon: <Workflow className="h-7 w-7 text-muted-foreground" /> }
  ];

  return (
    <motion.section 
      id="problem" 
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cuando no hay trazabilidad, la operación se vuelve un riesgo.</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Muchas empresas crecen más rápido que sus sistemas. El resultado es una operación fragmentada, difícil de controlar y dependiente de procesos manuales.
          </p>
        </div>
        <motion.div 
          className="mx-auto max-w-5xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, index) => (
                <motion.li 
                  key={index} 
                  className="flex gap-4 items-center p-4 rounded-lg bg-background/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  variants={itemVariant}
                >
                  <div className="flex-shrink-0">{problem.icon}</div>
                  <p className="text-foreground font-medium">{problem.description}</p>
                </motion.li>
              ))}
            </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SolutionSection() {
  return (
    <section id="solution" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden border-t bg-background">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">La Solución</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Control centralizado. Flexibilidad sin precedentes.</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Skylink es un núcleo de ERP robusto y estandarizado, con una capa de configuración ágil que moldea el software a la lógica de tu negocio.
            </p>
            <Card className="bg-card/50">
              <CardHeader>
                <CardTitle>¿Qué NO es Skylink?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No es un desarrollo a medida desde cero (lento y costoso), ni un software enlatado y rígido (que te fuerza a cambiar). Es lo mejor de ambos mundos.</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
          >
             <Image
                alt="Skylink ERP Diagram"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain object-center sm:w-full max-w-[400px] transform transition-transform duration-500 hover:scale-110"
                height="400"
                src="https://res.cloudinary.com/dbvlkvoic/image/upload/v1752632589/ChatGPT_Image_15_jul_2025_10_22_06_p.m._ljyklx.png"
                data-ai-hint="abstract diagram erp"
                width="400"
              />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const purchaseFeatures = ["Crear y gestionar órdenes de compra de forma centralizada", "Hacer seguimiento claro del estado de cada orden", "Definir flujos según el proceso del cliente", "Diferenciar compras nacionales e internacionales", "Adaptar documentos a la operación de la empresa"];
  const inventoryFeatures = ["Diferenciación entre insumos y productos", "Gestión centralizada de inventario", "Stock vinculado a compras y operación", "Base sólida para el cálculo de costos reales"];

  return (
    <motion.section 
      id="modules" 
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Módulos diseñados para el control operativo real</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Skylink está compuesto por módulos conectados entre sí, que trabajan como un solo sistema y se adaptan a la operación de cada empresa.
          </p>
        </div>
        <div 
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
        >
          <motion.div className="lg:col-span-2" variants={slideInLeft}>
            <Card className="flex flex-col border-primary/50 shadow-lg h-full transform transition-transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-4"><Truck className="h-8 w-8 text-primary" /></div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">Gestión de Compras</CardTitle>
                    <p className="text-sm text-muted-foreground pt-2">Problema que resuelve: Compras desordenadas, sin visibilidad, seguimiento ni control real.</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-4">Qué permite hacer:</p>
                <ul className="space-y-3 text-muted-foreground">
                  {purchaseFeatures.map(feature => ( <li key={feature} className="flex items-start gap-3"><CircleCheckBig className="mt-1 h-5 w-5 text-green-500 flex-shrink-0" /><span>{feature}</span></li> ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0 mt-4"><p className="text-sm font-semibold text-primary border-t border-primary/20 pt-4">MENSAJE DIFERENCIAL: <span className="font-normal text-muted-foreground">Las compras dejan de ser un trámite aislado y se convierten en un proceso trazable, conectado y controlado.</span></p></div>
            </Card>
          </motion.div>
          <motion.div variants={slideInRight}>
            <Card className="flex flex-col h-full transform transition-transform hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-4"><div className="rounded-full bg-primary/10 p-3"><Boxes className="h-6 w-6 text-primary" /></div><CardTitle className="text-xl">Inventario y Bodega</CardTitle></div>
                <p className="text-sm text-muted-foreground pt-4">Problema que resuelve: Falta de claridad sobre stock, costos y disponibilidad real.</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-semibold mb-3">Capacidades clave:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {inventoryFeatures.map(feature => ( <li key={feature} className="flex items-start gap-2"><CircleCheckBig className="mt-1 h-4 w-4 text-green-500 flex-shrink-0" /><span>{feature}</span></li> ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ConfigurabilitySection() {
  const features = [
    { icon: <Component className="h-6 w-6 text-primary" />, title: "Formato y características de los productos", description: "Define atributos, variantes y campos únicos para cada tipo de producto." },
    { icon: <GitBranch className="h-6 w-6 text-primary" />, title: "Flujo de aprobación y seguimiento", description: "Crea etapas y responsables para cada proceso, desde la solicitud hasta la aprobación." },
    { icon: <Landmark className="h-6 w-6 text-primary" />, title: "Compras nacionales e internacionales", description: "Adapta impuestos, monedas y documentos según el origen de la compra." },
    { icon: <FilePlus2 className="h-6 w-6 text-primary" />, title: "Diseño de documentos operativos", description: "Personaliza la información y campos en órdenes de compra, facturas y guías de despacho." },
  ]
  return (
    <motion.section 
      id="configurability" 
      className="w-full py-12 md:py-24 lg:py-32 border-t bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
       <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Un sistema configurable que se adapta a tu operación</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Cada empresa opera de forma distinta. Skylink permite configurar reglas, flujos y estructuras para que el sistema se ajuste a la forma real en que trabajas.
            </p>
             <div className="mt-6 border-l-4 border-primary pl-4">
                <p className="font-semibold text-foreground">
                    La plataforma se configura según tu operación, sin desarrollos complejos ni depender de soluciones externas.
                </p>
            </div>
          </div>
          <motion.div 
            className="grid gap-6 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map(feature => (
              <motion.div 
                key={feature.title} 
                className="p-6 rounded-lg bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all transform hover:scale-105"
                variants={itemVariant}
              >
                <div className="flex items-center gap-4 mb-3">
                  {feature.icon}
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </motion.section>
  )
}

function ImplementationSection() {
    const phases = [
    { phase: 1, title: "Diagnóstico operativo", description: "Entendemos cómo funciona tu operación y cuáles son los procesos clave.", icon: <FileSearch2 className="h-10 w-10 text-primary" /> },
    { phase: 2, title: "Configuración del sistema", description: "Ajustamos Skylink según tus flujos, reglas y estructura operativa.", icon: <Settings2 className="h-10 w-10 text-primary" /> },
    { phase: 3, title: "Carga de datos inicial", description: "Migramos y validamos la información base necesaria para operar.", icon: <DatabaseBackup className="h-10 w-10 text-primary" /> },
    { phase: 4, title: "Validación y capacitación", description: "Probamos el sistema junto a tu equipo y capacitamos a los usuarios clave.", icon: <UserCheck className="h-10 w-10 text-primary" /> },
    { phase: 5, title: "Go Live", description: "El sistema queda operativo para el uso diario.", icon: <PlayCircle className="h-10 w-10 text-primary" /> },
  ];
  
  return (
    <section id="implementation" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 overflow-hidden border-t">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Implementación clara, rápida y acompañada.</h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Implementar Skylink es un proceso guiado, enfocado en entender la operación del cliente y configurar la plataforma para un uso real desde el primer día.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-border hidden lg:block"
              style={{ transformOrigin: 'left' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
            />
          <motion.div 
            className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
          >
            {phases.map((p) => (
              <motion.div 
                key={p.phase} 
                className="relative flex flex-col items-center text-center"
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
              >
                <div className="absolute -top-4 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10">{p.phase}</div>
                <div className="mb-4">
                  {p.icon}
                </div>
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center max-w-3xl mx-auto mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={sectionVariant}
        >
          <p className="text-muted-foreground">
            Las implementaciones suelen realizarse en semanas, permitiendo resultados rápidos sin sacrificar control ni calidad. El proceso está pensado para avanzar rápido, con acompañamiento y foco en la operación real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsSection() {
    const solutions = [
        { title: "Empresas con inventario propio", description: "Controla entradas, salidas y ubicaciones en una o múltiples bodegas con total precisión.", icon: <Archive className="h-8 w-8 text-primary" /> },
        { title: "Operaciones con compras recurrentes", description: "Automatiza la gestión de proveedores, órdenes de compra y flujos de aprobación complejos.", icon: <History className="h-8 w-8 text-primary" /> },
        { title: "Negocios que producen o ensamblan", description: "Gestiona materias primas, procesos de producción y el costeo de productos terminados.", icon: <Construction className="h-8 w-8 text-primary" /> },
        { title: "Costo real de productos", description: "Obtén el costo exacto de tus productos, considerando importaciones, producción y logística.", icon: <Sigma className="h-8 w-8 text-primary" /> },
    ];

    return (
        <motion.section 
          id="solutions" 
          className="w-full py-12 md:py-24 lg:py-32 border-t bg-background"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
            <div className="container">
                 <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Diseñado para distintas formas de operar</h2>
                    <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Skylink se adapta a distintos tipos de operación, manteniendo control, trazabilidad y escalabilidad.
                    </p>
                </div>
                 <motion.div 
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                 >
                    {solutions.map((solution) => (
                        <motion.div key={solution.title} variants={itemVariant}>
                          <Card className="text-center p-6 flex flex-col items-center h-full hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                              <div className="mb-4 rounded-full bg-primary/10 p-4">
                                  {solution.icon}
                              </div>
                              <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                              <p className="text-sm text-muted-foreground flex-grow">{solution.description}</p>
                          </Card>
                        </motion.div>
                    ))}
                 </motion.div>
                 <div className="text-center max-w-3xl mx-auto mt-16">
                     <p className="text-lg font-semibold text-foreground border-t pt-6">
                        Independiente del rubro, el sistema se configura según cómo opera tu empresa.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

function TrustSection() {
  const pillars = [
    { icon: <CloudCog className="h-8 w-8 text-primary" />, title: "Infraestructura Cloud", description: "Plataforma desplegada sobre Google Cloud, con respaldo y alta disponibilidad." },
    { icon: <Lock className="h-8 w-8 text-primary" />, title: "Protección de la información", description: "Datos resguardados con buenas prácticas de seguridad y control de acceso." },
    { icon: <HardDrive className="h-8 w-8 text-primary" />, title: "Continuidad operativa", description: "Sistema pensado para operar de forma estable y sostenida en el tiempo." },
    { icon: <ScanLine className="h-8 w-8 text-primary" />, title: "Control y trazabilidad", description: "Visibilidad clara de procesos y acciones dentro del sistema." },
  ];
  return (
    <motion.section 
      id="trust" 
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <div className="container">
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seguridad y estabilidad para tu operación</h2>
             <p className="text-muted-foreground md:text-xl/relaxed">
              Skylink está diseñado para operar información crítica de forma segura, estable y confiable, acompañando el crecimiento de la empresa.
            </p>
        </div>
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map(p => (
            <motion.div 
              key={p.title} 
              className="text-center flex flex-col items-center p-4"
              variants={itemVariant}
            >
              {p.icon}
              <h3 className="font-bold text-lg mt-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
         <div className="text-center max-w-3xl mx-auto mt-16">
            <p className="text-lg font-semibold text-foreground border-t pt-6">
                La seguridad no es un extra, es parte del diseño del producto.
            </p>
        </div>
      </div>
    </motion.section>
  );
}

function AboutUsSection() {
  return (
    <motion.section 
      id="empresa" 
      className="w-full py-12 md:py-24 lg:py-32 border-t bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Construimos tecnología pensada para operar</h2>
          <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
            <p>
              Skylink nace como una idea que fue evolucionando a partir de necesidades reales de control, trazabilidad y crecimiento operativo.
            </p>
            <p>
              Con el tiempo, el producto se fue adaptando y fortaleciendo hasta convertirse en un ecosistema diseñado para acompañar a empresas en su operación diaria.
            </p>
            <p>
              Hoy, Skylink se construye con foco en estabilidad, escalabilidad y evolución continua del producto.
            </p>
          </div>
          <div className="border-t pt-8 mt-4">
            <p className="text-xl font-semibold text-foreground">
              Más que vender software, construimos una plataforma que se adapta a la forma real en que operan las empresas.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


function FinalCTASection() {
  return (
    <motion.section 
      id="contact" 
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">¿Quieres ver cómo Skylink se adapta a tu operación?</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Agenda una demo guiada y conversemos sobre tus procesos y necesidades reales.
          </p>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <DemoRequestForm />
        </div>
      </div>
    </motion.section>
  );
}


export default function SkylinkErpLandingPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <ConfigurabilitySection />
        <ImplementationSection />
        <SolutionsSection />
        <TrustSection />
        <AboutUsSection />
        <FinalCTASection />
      </main>

      <footer className="w-full shrink-0 border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 sm:flex-row">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
             <p>&copy; {new Date().getFullYear()} Skylink Solutions Inc.</p>
             <span className="hidden sm:inline">|</span>
             <p>Operando en Latinoamérica</p>
             <span className="hidden sm:inline">|</span>
             <a href="mailto:contacto@skylink.com" className="hover:text-foreground">contacto@skylink.com</a>
          </div>
          <nav>
              <a href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4">Política de Privacidad</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
