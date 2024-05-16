const API_URL = "http://localhost:3500/item";

useEffect(() => {
const fetchItem = async () => {
try {
const response = await fetch(API_URL);

      if (!response.ok) throw Error("Did not recieve data");
      const listItems = await response.json();
      setItems(listItems);
      setFetcherror(null);
    } catch (err) {
      setFetcherror(err.message);
    } finally {
    }

};
(async () => await fetchItem())();
}, []);
