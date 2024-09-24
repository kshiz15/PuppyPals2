export default function PuppyListItem(props) {
  const { puppy, setSelectedPuppy } = props;

  return <li onClick={() => setSelectedPuppy(puppy)}>{puppy.name}</li>;
}
