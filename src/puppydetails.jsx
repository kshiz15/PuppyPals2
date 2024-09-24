export default function PuppyDetails({ selectedPuppy }) {
  const $selectedPuppyTricks = selectedPuppy.tricks.length > 0 && (
    <div>
      <dt>Tricks</dt>
      <dd>
        <ul>
          {selectedPuppy.tricks.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      </dd>
    </div>
  );

  return (
    <dl>
      <div>
        <dt>Age</dt>
        <dd>{selectedPuppy.age}</dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>{selectedPuppy.email}</dd>
      </div>
      {$selectedPuppyTricks}
    </dl>
  );
}
