interface Props {
  tittle: string;
  text: string;
  tag: string;
}
const Lbox = ({ tittle, text, tag }: Props) => {
  return (
    <>
      <div className=" col-4 ms-auto">
        <div className="card bg-black ">
          <h2 className="h4 text-white">{tittle}</h2>
          <p className="card-text text-white pt">{text}</p>
          <div>
            <a href="" className="btn btn-warning">
              {tag}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lbox;
