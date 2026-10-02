type Props = {
  icone: string;
  titulo: string;
  kicker?: string;
};

export function SectionTitle({ icone, titulo, kicker }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <img src={`/icones/${icone}`} alt="" width={48} height={48} className="size-12" />
      <div>
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{kicker}</p>
        ) : null}
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">{titulo}</h2>
      </div>
    </div>
  );
}
