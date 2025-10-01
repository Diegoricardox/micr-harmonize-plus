import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Sobre", path: "/" },
  { title: "População", path: "/populacao" },
  { title: "Estabelecimentos", path: "/estabelecimentos" },
  { title: "Internações", path: "/internacoes" },
  { title: "Ambiente", path: "/ambiente" },
  { title: "Rascunho", path: "/rascunho" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-foreground/70"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
