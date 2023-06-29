import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { AnalyzeRoute } from '@/routes/analyze.route';
import { LoginRoute } from '@routes/login.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new AnalyzeRoute(), new LoginRoute()]);

app.listen();
