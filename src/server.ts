import * as express from 'express'

/**
 * Http的服务器
 */
export class HttpServer {
    private app: express.Express;
    private port: number;
    constructor(port: number) {
        this.app = express();
        this.port = port;
        //配置所有服务
        this.setupServices();
    }

    /**
     * 配置本服务器所有的服务
     */
    private setupServices() {
        //配置根目录
        this.app.post('/post', (req, res) => {
            res.send(`${req.body} POST request to the homepage`);
        })
    }

    /**
     * 启动服务器
     */
    public start() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

//实例化一个HttpServer类，设置其端口为3000
var httpServer = new HttpServer(3000);
//调用这个实例的“启动”方法，以启动此服务器。
httpServer.start();
