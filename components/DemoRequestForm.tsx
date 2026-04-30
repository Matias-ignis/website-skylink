'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';

// Esquema de validación
const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'El nombre de la empresa debe tener al menos 2 caracteres.' }),
  role: z.string().min(2, { message: 'El cargo debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  operationType: z.string().min(1, { message: "Por favor, selecciona un tipo de operación." }),
});

export function DemoRequestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      role: '',
      email: '',
      operationType: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast('¡Solicitud enviada!', {
      description: 'Gracias por tu interés. Nos pondremos en contacto contigo pronto.',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de tu empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo</FormLabel>
                <FormControl>
                  <Input placeholder="Tu cargo en la empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Tu email corporativo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="operationType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de operación</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el principal desafío de tu operación" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="inventario">Empresas con inventario propio</SelectItem>
                  <SelectItem value="compras">Operaciones con compras recurrentes</SelectItem>
                  <SelectItem value="produccion">Negocios que producen o ensamblan</SelectItem>
                  <SelectItem value="costos">Necesidad de conocer el costo real</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full text-lg px-8 py-6">Solicitar demo guiada</Button>
      </form>
    </Form>
  );
}