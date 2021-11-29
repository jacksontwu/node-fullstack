import { HealthService } from 'src/service';

class HealthController {
    private service: HealthService = new HealthService();

    health = async (ctx) => {
        const health = this.service.health();
        ctx.body = { health };
    };
}

export default new HealthController();
