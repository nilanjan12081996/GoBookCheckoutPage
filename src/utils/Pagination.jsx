import { Pagination } from "flowbite-react";

const PaginationSection = ({
  //   currentPage,
  totalPages,
  //   setCurrentPage,
  pageSection,
  setPageSection,
}) => {
  const onPageChange = (page) => {
    setPageSection((prevState) => ({
      ...prevState,
      page: page,
    }));
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center pagination_section mt-12">
      <Pagination
        currentPage={pageSection.page}
        totalPages={Math.ceil(totalPages)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationSection;
