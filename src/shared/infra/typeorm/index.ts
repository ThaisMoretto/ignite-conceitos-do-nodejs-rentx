import "reflect-metadata";

import AppDataSourceConnection from "@shared/infra/typeorm/data-source";

const dataSource = AppDataSourceConnection();

export default dataSource;
