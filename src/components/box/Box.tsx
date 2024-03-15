interface Props {
  tittle: string;
  text: string;
  tag: string;
}
const Box = ({ tittle, text, tag }: Props) => {
  return (
    <>
      <div className="card col-4 bg-black ">
        <h2 className="h4 text-white">{tittle}</h2>
        <p className="card-text text-white pt">{text}</p>
        <div>
          <a href="" className="btn btn-warning">
            {tag}
          </a>
        </div>
      </div>
    </>
  );
};

export default Box;
