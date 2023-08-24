import MockAdapter from "axios-mock-adapter";

import axios from "../../services/api";

const adapter = new MockAdapter(axios);

export default adapter;
