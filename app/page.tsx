import {
  ArrowUpRight,
  Instagram,
  Mail,
  Music2,
  Play,
  Radio,
  Youtube
} from "lucide-react";

const links = {
  // TODO: Replace with the official Smoking Dogs YouTube URL.
  youtube: "https://www.youtube.com/@SmokingDogsSg",
  // TODO: Replace with the official Smoking Dogs Instagram URL.
  instagram: "https://www.instagram.com/smokingdogs_sg/",
  // TODO: Replace with the official Smoking Dogs Spotify URL.
  spotify: "https://open.spotify.com/artist/0OWDdZeo1wpu0DdIFBwMo6",
  // TODO: Replace with the preferred booking/contact email.
  email: "smokingdogssg.official@gmail.com"
};

const heroButtons = [
  { label: "YouTube", href: links.youtube, icon: Youtube },
  { label: "Instagram", href: links.instagram, icon: Instagram },
  { label: "Spotify", href: links.spotify, icon: Music2 },
  { label: "Contact", href: `mailto:${links.email}`, icon: Mail }
];

const socialCards = [
  {
    label: "YouTube",
    description: "Live cuts, rehearsal room grit, and official video drops.",
    href: links.youtube,
    icon: Youtube
  },
  {
    label: "Instagram",
    description: "Backstage frames, show announcements, and band updates.",
    href: links.instagram,
    icon: Instagram
  },
  {
    label: "Spotify",
    description: "Singles, playlists, and the next wave of studio releases.",
    href: links.spotify,
    icon: Music2
  }
];

const galleryTiles = [
  "Stage Heat",
  "Amp Glow",
  "Red Room",
  "Late Set",
  "Smoke Break",
  "Final Chord"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-zinc-100">
      <section className="smoke-layer relative flex min-h-[760px] items-center px-5 py-8 sm:min-h-[92vh] sm:px-8 lg:px-12">
        <div
          className="absolute inset-0 bg-contain bg-top bg-no-repeat brightness-110 contrast-105 sm:bg-cover sm:bg-center"
          style={{ backgroundImage: "url('/gallery/hero.png')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="smoke-layer absolute inset-0 opacity-25" />
        <div className="noise-overlay absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl pt-32 sm:pt-44 lg:pt-56">
            <p className="max-w-2xl text-2xl font-semibold leading-9 text-zinc-100 drop-shadow-2xl sm:text-4xl sm:leading-tight">
              Raw rock energy. Heavy grooves. No apologies.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {heroButtons.map((button) => {
                const Icon = button.icon;

                return (
                  <a
                    key={button.label}
                    href={button.href}
                    className="group inline-flex min-h-12 items-center gap-2 border border-zinc-700 bg-zinc-950/70 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-zinc-100 transition hover:border-red-400 hover:bg-red-950/35 hover:text-white"
                  >
                    <Icon className="h-4 w-4 text-amber-300 transition group-hover:text-red-300" />
                    {button.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="max-w-sm border-l border-red-500/35 pl-6 text-sm leading-7 text-zinc-300 lg:mb-6">
          </div>
        </div>
      </section>

      <section id="about" className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-red-300">
              About
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
              Classic attitude. Modern weight.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-300 sm:text-[17px] sm:leading-9">
            <p>
              Smoking Dogs is Mo on vocals, Val on guitars, Lee Dea on bass,
              and Hardy on drums &mdash; with Elise on violin as an extended
              member of the band.
            </p>
            <p>
              A special mention goes to Raphael and Sean on bass, who were huge
              contributors to the sound and spirit of Smoking Dogs.
            </p>
          </div>
        </div>
      </section>

      <section id="music" className="bg-zinc-950 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.32em] text-amber-300">
                Music & Social
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
                Follow the signal.
              </h2>
            </div>
            <Radio className="hidden h-12 w-12 text-red-400 sm:block" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {socialCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="group border border-zinc-800 bg-black/55 p-6 transition hover:border-red-500/70 hover:bg-red-950/20"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-amber-300" />
                    <ArrowUpRight className="h-5 w-5 text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.label}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    {card.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-black px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-red-300">
              Gallery
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
              Six frames from the fire.
            </h2>
          </div>

          {/*
            TODO: Replace these gradient placeholders with real band photos.
            Put images in public/gallery, then switch each tile background to:
            backgroundImage: "url('/gallery/your-image-name.jpg')"
          */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryTiles.map((tile, index) => (
              <div
                key={tile}
                className="group relative aspect-[4/5] overflow-hidden border border-zinc-800 bg-zinc-950"
              >
                <div
                  className="absolute inset-0 scale-105 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${24 + index * 9}% ${
                      18 + index * 7
                    }%, rgba(245, 158, 11, 0.34), transparent 28%), radial-gradient(circle at ${
                      78 - index * 6
                    }% 72%, rgba(220, 38, 38, 0.32), transparent 32%), linear-gradient(135deg, #18181b, #09090b 58%, #000)`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-200">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{tile}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y border-zinc-800 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-amber-300">
              Booking
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-6xl">
              Bring the noise in.
            </h2>
            <p className="mt-5 text-lg text-zinc-300">{links.email}</p>
          </div>
          <a
            href={`mailto:${links.email}`}
            className="inline-flex min-h-14 w-fit items-center gap-3 bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-ember transition hover:bg-red-500"
          >
            <Mail className="h-5 w-5" />
            Contact for Booking
          </a>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-center text-sm text-zinc-500 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Smoking Dogs</p>
          <div className="flex items-center gap-2 text-zinc-600">
            <Play className="h-4 w-4" />
            <span>Raw rock energy from Singapore</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
