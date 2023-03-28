import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <div>
      <h1>Filtered events page</h1>
    </div>
  );
};

export default FilteredEventsPage;
