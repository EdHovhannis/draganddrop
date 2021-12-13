import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { code } from "../../helpers/codemaker";
import { getDataAction } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";
import { ContentContext } from "../../context/ContentContext";

export const Code = () => {
  const router = useHistory();
  const { data } = useSelector((state) => state?.getDataReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  const handled = data?.map((item) =>
    item.parentId
      ? { ...item, parent: item.parentId, id: item._id }
      : { ...item, id: item._id }
  );
  const { setCodedata, codedata } = useContext(ContentContext);
  console.log(codedata);
  const topreview = () => {
    router.push("/preview");
  };

  return (
    <>
      {data.length && (
        <button
          onClick={topreview}
          onMouseEnter={() => setCodedata(code(handled, undefined))}
          onMouseLeave={() => setCodedata(null)}
        >
          PreView
        </button>
      )}
      {data.length && (
        <pre>{JSON.stringify(code(handled, undefined), null, 4)}</pre>
      )}
    </>
  );
};
