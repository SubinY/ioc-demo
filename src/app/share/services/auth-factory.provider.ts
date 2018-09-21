import { AuthService } from "./auth.service";
import { CommonService } from "./common.service";
import { UserAuth } from "../../config/user.config";

let AuthServiceFactory = (commonService: CommonService) => {
  console.log(1)
  return new AuthService(commonService, UserAuth);
};

export let AuthServiceProvider =
  { provide: AuthService,
    useFactory: AuthServiceFactory,
    deps: [CommonService]
  };
