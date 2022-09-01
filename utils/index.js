export const sortByDate = (postedDate, currentDate) => {
  return (
    new Date(currentDate.frontmatter.date) -
    new Date(postedDate.frontmatter.date)
  );
};
