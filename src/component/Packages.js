import baby from "../assets/images/baby.png";
import laptops from "../assets/images/laptops.png";
import grocery from "../assets/images/grocery.png";
import appliances from "../assets/images/appliances.png";
import fragnance from "../assets/images/fragnance.png";
import searchIcon from "../assets/images/search-black.png";

export default function Packages() {
  return (
    <div className="Packages">
      <div className="Packages-searchbar">
        <div className="inner-bar">
          <div className="search-Item">Emirate</div>
          <div className="search-Item">Price Range</div>
          <div className="search-Item">No of Visa</div>
          <div className="search-Item">No of Activities</div>
        </div>
        <img src={searchIcon} />
      </div>
      <div className="Packages-header">
        <span>Best Packages in Trading</span>
      </div>
      <div className="Packages-area">
        <div className="item-cont">
          <span className="spanHead">
            Server <br /> AED 1000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 5
            </span>
          </div>
        </div>

        <div className="item-cont2">
          <span className="spanHead">
            Server + <br /> AED 5000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 12
            </span>
          </div>
        </div>

        <div className="item-cont3">
          <span className="spanHead">
            Flexi <br /> AED 6000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 10
            </span>
          </div>
        </div>

        <div className="item-cont4">
          <span className="spanHead">
            Flexi + <br /> AED 10000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 10
            </span>
          </div>
        </div>
      </div>

      <div className="Packages-header">
        <span>Best Packages in Selling</span>
      </div>
      <div className="Packages-area">
        <div className="item-cont">
          <span className="spanHead">
            AMC <br /> AED 1000 <br /> Save 2000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 5
            </span>
          </div>
        </div>

        <div className="item-cont2">
          <span className="spanHead">
            IFZA <br /> AED 7000 <br /> Save 2000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 8
            </span>
          </div>
        </div>

        <div className="item-cont3">
          <span className="spanHead">
            RAK <br /> AED 10000 <br /> Save 3000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 12
            </span>
          </div>
        </div>

        <div className="item-cont4">
          <span className="spanHead">
            SPC <br /> AED 15000 <br /> Save 5000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 15
            </span>
          </div>
        </div>
      </div>

      <div className="Packages-header">
        <span>Recommended For You</span>
      </div>
      <div className="Packages-area">
        <div className="item-cont">
          <span className="spanHead">
            AMC <br /> AED 1000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 5
            </span>
          </div>
        </div>

        <div className="item-cont2">
          <span className="spanHead">
            IFZA <br /> AED 5000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 12
            </span>
          </div>
        </div>

        <div className="item-cont3">
          <span className="spanHead">
            DWC <br /> AED 6000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 10
            </span>
          </div>
        </div>

        <div className="item-cont4">
          <span className="spanHead">
            SHAMS <br /> AED 10000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 10
            </span>
          </div>
        </div>
      </div>

      <div className="Packages-header">
        <span>Explore all in Trading</span>
      </div>
      <div className="Packages-area">
        <div className="item-cont">
          <span className="spanHead">
            AMC <br /> AED 1000 <br /> Save 2000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 5
            </span>
          </div>
        </div>

        <div className="item-cont2">
          <span className="spanHead">
            SHAMS <br /> AED 7000 <br /> Save 2000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 8
            </span>
          </div>
        </div>

        <div className="item-cont3">
          <span className="spanHead">
            Flexi <br /> AED 10000 <br /> Save 3000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 12
            </span>
          </div>
        </div>

        <div className="item-cont4">
          <span className="spanHead">
            Flexi + <br /> AED 15000
            <br /> Save 5000
          </span>
          <br />
          <br />
          <br />
          <div className="inner-box">
            <span>
              Select <br /> Sold - 15
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
