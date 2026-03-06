import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Calendar, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CALENDLY = "https://calendly.com/morphwebstudio/new-meeting";
const EMAIL = "morphwebstudio@gmail.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Il nome è obbligatorio").max(100),
  email: z.string().trim().email("Inserisci un'email valida").max(255),
  message: z.string().trim().min(1, "Scrivi un messaggio").max(2000),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  source: z.string().optional().or(z.literal("")),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contatti = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", phone: "", source: "" },
  });

  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent(`Richiesta da ${data.name}`);
    const body = encodeURIComponent(
      `Nome: ${data.name}\nEmail: ${data.email}${data.phone ? `\nTelefono: ${data.phone}` : ""}${data.source ? `\nTrovato tramite: ${data.source}` : ""}\n\nMessaggio:\n${data.message}`
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_self");
    toast.success("Client email aperto! Invia il messaggio dal tuo programma di posta.");
    form.reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-20 md:py-32">
        <div className="absolute -right-16 top-16 h-64 w-64 md:h-96 md:w-96 rounded-full border-2 border-accent/20" />
        <div className="absolute -right-8 top-24 h-48 w-48 md:h-72 md:w-72 rounded-full border border-accent/15" />
        <div className="absolute right-[20%] top-0 w-[2px] h-32 bg-accent/15" />
        <div className="absolute left-[10%] bottom-[10%] h-40 w-40 rounded-full border-2 border-accent/15" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/50 animate-slide-up">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              MorphWebStudio
            </span>
            <h1 className="mt-8 text-display font-serif font-black text-primary-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Contattaci<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-primary-foreground/50 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Raccontaci il tuo progetto: ti rispondiamo entro 24 ore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Parliamo del tuo progetto
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Compila il form oppure contattaci direttamente. Siamo disponibili per una consulenza gratuita.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">{EMAIL}</p>
                  </div>
                </a>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Calendar className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Prenota una call</p>
                    <p className="text-sm font-medium text-foreground">Calendly</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <div className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome *</FormLabel>
                            <FormControl>
                              <Input placeholder="Il tuo nome" {...field} className="focus-visible:ring-accent" />
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
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="nome@esempio.com" {...field} className="focus-visible:ring-accent" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Richiesta *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Descrivi il tuo progetto o la tua richiesta…" rows={5} {...field} className="focus-visible:ring-accent" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefono <span className="text-muted-foreground font-normal">(opzionale)</span></FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+39 …" {...field} className="focus-visible:ring-accent" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="source"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Come ci hai trovato <span className="text-muted-foreground font-normal">(opzionale)</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="focus:ring-accent">
                                  <SelectValue placeholder="Seleziona…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="google">Google</SelectItem>
                                <SelectItem value="social">Social Media</SelectItem>
                                <SelectItem value="passaparola">Passaparola</SelectItem>
                                <SelectItem value="altro">Altro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-2">
                      <Send className="h-4 w-4 mr-2" />
                      Invia Richiesta
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
