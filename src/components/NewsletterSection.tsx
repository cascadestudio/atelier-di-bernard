import Button from "./Button";

export default function NewsletterSection() {
  return (
    <section className="bg-[var(--light-blue)] border-y border-[var(--blue)] py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-[var(--blue)] mb-4">Newsletter</h2>
        <p className="text-[var(--blue)] mb-8">
          Pour ne rater aucun événement de l&apos;atelier, inscrivez-vous à
          notre newsletter !
        </p>
        <Button href="http://eepurl.com/h2ff7f">S&apos;inscrire</Button>
      </div>
    </section>
  );
}
