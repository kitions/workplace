



### b.smm.cn Code Review

1. **业务需求**
2. **golang代码结构**
3. **项目的目录结构**
4. **详细代码实现及review**





























#### 1. 需求

   [原型](https://axhub.im/pro/c436b84868b506c6/#g=1&p=%E9%9C%80%E6%B1%82%E6%95%B4%E4%BD%93%E8%AF%B4%E6%98%8E)

#### 2. golang代码结构

   [container图](https://www.processon.com/view/link/5bd996c3e4b00cdc18c3ab61)

   [参考晓奇Gin分析](https://github.com/smmit/share/tree/master/Gin%E6%A1%86%E6%9E%B6%E4%B8%8EPongo2%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E%E5%80%AA%E6%99%93%E5%A5%87)

#### 3.  项目的目录结构 

   项目整体页面部分整体采用的思路和以往项目一样是组合+继承，整个项目有一个公共的模板base.html，供其他所有页面继承。其他页面继承base.html后，在页面中根据需求，将组件抽出，一个一个将组件组合到页面中。

   ![目录结构1](https://ws2.sinaimg.cn/large/006tNbRwgy1fwscvl6maqj30es0qtdiu.jpg)

   ![目录结构2](https://ws2.sinaimg.cn/large/006tNbRwgy1fwsdbtnv88j308q0mgjsf.jpg)

   ```R
   src/                        
       b/                     			--> 页面开发主目录
           client/           			
           |    common/             	--> 通用ts
   		   |	 |	common.ts
   		   |	 |	...
           |    components/            --> 组件
   		   |	 |	info_list/
   		   |	 |		info_list.html
   		   |	 |		info_list.scss
   		   |	 |		info_list.ts
   		   |	 |	...
           |    declare/           		--> ts声明文件
           |    lib/            		--> ts公共基础方法
           |    pages/            		--> 页面
           |	 |	index/
   		   |	 |		index.html
   		   |	 |		index.scss
   		   |	 |		index.ts
   		   |	 |	...
   		   |	 tsconfig.json
           node_modules/             	--> 依赖包
           static/          			--> 静态文件
   		   |	release/
           |	images/
           |	fonts/
           templates/               	--> gulp生成的模板
           z_cache/               		--> gulp打包的js
           default.cfg                 --> go配置文件
           gulpfile.js                 --> gulp配置文件
           package.json 				
           main.go                 		--> go主函数
           router.go                 	--> go主路由
           run.sh                	 	--> 项目启动脚本
       config/                        	--> go配置文件
   		   config.go
       handler/                        --> golang 开发主目录
       	   api/							--> 开放给前台的api
       		   AjaxUserInfo.go
       		   ...
       	   container/					--> container
       		   UserInfo.go				--> 包含之前的handler，service，model
       		   ...
       	   render.go					--> c.Html()渲染函数
       helper/                        	-->	container机制的基础包
   			api.go
   			cache.go
   			const.go
   			container.go
   			parallel.go
   			protocol.go
       model/                    		--> 目前将分页器放在model
   			page.go
       utils/                      	--> 工具集合文件夹
   
   ```

