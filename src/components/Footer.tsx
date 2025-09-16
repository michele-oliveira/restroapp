import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RestroApp</h3>
            <p className="text-primary-foreground/80">
              A melhor experiência gastronômica na palma da sua mão.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary-foreground/80 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#menu"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cardápio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  contato@restroapp.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  São Paulo, SP
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horário de Funcionamento</h4>
            <div className="text-primary-foreground/80 space-y-1">
              <p>Segunda - Sexta: 11h - 22h</p>
              <p>Sábado: 11h - 23h</p>
              <p>Domingo: 12h - 21h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 RestroApp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
