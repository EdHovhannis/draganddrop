import { Prev } from "./Prev";

export const Recursion = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      {Array.isArray(data) ? (
        data.map((item) => {
          return (
            <Prev theme={item} key={item.id}>
              {item.children && <Recursion data={item.children} />}
            </Prev>
          );
        })
      ) : (
        <Prev theme={data}>
          {data.children && <Recursion data={data.children} />}
        </Prev>
      )}
    </>
  );
};
