import PuppyDetails from "./puppydetails";

export default function SelectedPuppySection({ selectedPuppy }) {
  if (!selectedPuppy) {
    return (
      <section>
        <h2>No selected puppy.</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>{selectedPuppy.name}</h2>
      <PuppyDetails selectedPuppy={selectedPuppy} />
    </section>
  );
}
