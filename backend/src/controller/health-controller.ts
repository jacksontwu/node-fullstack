import { HealthService } from 'src/service';

class HealthController {
    private service: HealthService = new HealthService();

    health = (ctx: any) => {
        const health = this.service.health();
        ctx.body = { health };
    };
}

export default HealthController;
