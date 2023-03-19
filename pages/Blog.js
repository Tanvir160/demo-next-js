import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="mt-5">
      <div className="container text-center ">
        <div className="row gap-5">
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href={`/Chack`}>
              <div className="card  " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href={`/Chainsaw`}>
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href="">
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href="">
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href="">
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href="">
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href="">
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col-sm-12 col-lg-3 ">
            <Link href="">
              <div className="card " style={{ width: 300 }}>
                <Image src="/tan.png" width="300" height="200"></Image>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </Link>
          </div>
          {/* <>end card</> */}
          {/* <>start card</> */}
          <div className="col">Column</div>
          {/* <>end card</> */}
        </div>
      </div>
    </div>
   
  );
};

export default dynamic(() => Promise.resolve(Blog), { ssr: false });