import { useState, useEffect } from "react";
import Launches from "./components/Launches";
import { ThemeProvider } from "styled-components";
import theme from "./components/Styles/Theme";
import GlobalStyles from "./components/Styles/GlobalStyles.js";
import earth from "./components/earth.jpeg";

const ThemeWrapper = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const apiUrl = "https://api.spacexdata.com/v4/launches/query";

  function getQueryBody(pageNumber) {
    return {
      query: {
        upcoming: false,
        success: true,
      },
      options: {
        page: pageNumber,
        select: {
          id: 1,
          name: 2,
          links: 3,
          date_utc: 4,
          flight_number: 5,
        },
        populate: [
          {
            path: "rocket",
            select: {
              id: 1,
              name: 2,
              type: 3,
              description: 4,
              height: 5,
              diameter: 6,
              mass: 7,
              flickr_images: 8,
            },
          },
          {
            path: "crew",
            select: {
              id: 1,
              name: 2,
              agency: 3,
              image: 4,
            },
          },
          {
            path: "payloads",
            select: {
              id: 1,
              name: 2,
              type: 3,
              orbit: 4,
              reference_system: 5,
              regime: 6,
            },
          },
          {
            path: "capsules",
            select: {
              id: 1,
              type: 2,
              status: 3,
              serial: 4,
            },
          },
          {
            path: "launchpad",
            select: {
              id: 1,
              name: 2,
              full_name: 3,
              locality: 4,
              region: 5,
              latitude: 6,
              longitude: 7,
              details: 8,
            },
          },
        ],
        sort: {
          flight_number: "desc",
        },
      },
    };
  }

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getQueryBody(pageNumber)),
      });

      if (!response.ok) {
        console.log("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    fetchData(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    fetchData(currentPage - 1);
  };

  return (
    <ThemeWrapper>
      <div className="container">
        <div className="totalLaunches">
          <p> Launches: {data["totalDocs"]}</p>
        </div>
        {data["docs"] ? (
          <div className="currentPage">
            <Launches launches={data["docs"]} />
            <p>
              Page {data["page"]} / {data["totalPages"]}{" "}
            </p>
            <div className="pagination">
              <button
                variant="outlined"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Prev Page
              </button>
              <button
                variant="outlined"
                onClick={nextPage}
                disabled={currentPage === data["totalPages"]}
              >
                Next Page
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="planet">
        <img alt="planet earth photograph" src={earth} />
      </div>
      <GlobalStyles />
    </ThemeWrapper>
  );
}
export default App;
