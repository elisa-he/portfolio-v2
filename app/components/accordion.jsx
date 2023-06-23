import works from "/json/work.json";

export default function Accordion({ params }) {
  const workId = params.slug;

  const designDesc = works?.length && works[workId]?.designDesc;
  const highlightDesc =
    works?.length &&
    works[workId]?.highlights.map((h, i) => {
      <p>{h.highlightDesc}</p>;
    });
  const learnedDesc = works?.length && works[workId]?.learnedDesc;

  const [isActive, setIsActive] = useState(0);

  const handleClick = (key) => {
    if (key === isActive) {
      setIsActive(0);
    } else {
      setIsActive(key);
    }
  };

  return (
    <>
      <div className="tabs">
        <div className="tab 1" onClick={() => handleClick(1)}>
          <h3 key={1}>planning</h3>
          <div>{isActive === 1 ? "-" : "+"}</div>
        </div>
        {isActive === 1 && <p className="desc">{designDesc}</p>}
        <div className="tab 2" onClick={() => handleClick(2)}>
          <h3 key={2}>highlights</h3>
          <div>{isActive === 2 ? "-" : "+"}</div>
        </div>
        {isActive === 2 && (
          <div className="desc">
            {works?.length &&
              works[workId]?.highlights?.map((h) => {
                return (
                  <div className="highlightWrap">
                    <img className="highlightImg" src={h.highlightImg} alt="" />
                    <p className="highlightDesc">{h.highlightDesc}</p>
                  </div>
                );
              })}
          </div>
        )}
        <div className="tab 3" onClick={() => handleClick(3)}>
          <h3 key={3}>what i learned</h3>
          <div>{isActive === 3 ? "-" : "+"}</div>
        </div>

        {isActive === 3 && <p className="desc">{learnedDesc}</p>}
      </div>
    </>
  );
}
