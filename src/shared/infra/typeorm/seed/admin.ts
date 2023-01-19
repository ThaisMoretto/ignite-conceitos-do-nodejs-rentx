import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";

import AppDataSource from "../data-source";

const dataSource = AppDataSource("localhost");

async function create() {
  const id = uuidV4();
  const password = await hash("admin", 8);

  dataSource
    .initialize()
    .then(() => {
      console.log("Initializing the database...");
      dataSource.transaction(async transactionalEntityManager => {
        await transactionalEntityManager.query(
          `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
      `,
        );
      });
      console.log("User admin created");
    })
    .catch(error => {
      console.log("Error during Data Source initialization:", error);
    });
}

create();
