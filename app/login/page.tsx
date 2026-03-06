"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Demo: cualquier credencial válida funciona
    setTimeout(() => {
      setLoading(false);
      if (formData.email && formData.password.length >= 6) {
        setSuccess(true);
      } else {
        setError("Credenciales incorrectas. Verifica tu email y contraseña.");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Pacal"
              width={82}
              height={82}
              className="rounded-lg"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al sitio
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {success ? (
            /* Success state */
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-text-main mb-2">
                Bienvenido
              </h2>
              <p className="text-text-muted mb-8">
                Has iniciado sesión correctamente en el portal Pacal.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors"
              >
                Ir al panel
              </Link>
            </div>
          ) : (
            /* Login form */
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-5">
                  <Image
                    src="/images/logo.jpg"
                    alt="Pacal"
                    width={64}
                    height={64}
                    className="rounded-xl"
                  />
                </div>
                <h1 className="text-2xl font-bold text-text-main">
                  Acceso al portal
                </h1>
                <p className="text-text-muted text-sm mt-1">
                  Ingresa tus credenciales para continuar
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1.5">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="usuario@pacal.cl"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-text-main">
                      Contraseña
                    </label>
                    <button
                      type="button"
                      className="text-xs text-primary hover:text-primary-light transition-colors"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="••••••••"
                      className="w-full pl-10 pr-11 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main transition-colors"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>
              </form>

              {/* Demo hint */}
              <p className="mt-6 text-center text-xs text-text-muted">
                Demo — ingresa cualquier email y contraseña de 6+ caracteres
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-text-muted border-t border-gray-100 bg-white">
        &copy; {new Date().getFullYear()} Pacal. Todos los derechos reservados.
      </div>
    </div>
  );
}
