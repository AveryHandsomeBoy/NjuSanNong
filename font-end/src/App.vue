<template>
	<v-app>
		<v-app-bar app color="black" dark>
			<div class="d-flex align-center">
				<v-img alt="NJU Logo" class="shrink mr-2" contain :src="schoolIcon" transition="scale-transition" width="40" />
				南京大学普惠·三农金融科技创新研究中心
			</div>

			<v-spacer></v-spacer>
			<v-btn href="#reaDirection" text>
				<span class="mr-2">研究方向</span>
			</v-btn>
			<v-btn href="#reaTeam" text>
				<span class="mr-2">研究团队</span>
			</v-btn>
			<v-btn href="#talTraining" text>
				<span class="mr-2">人才培养</span>
			</v-btn>
			<v-btn text>
				<span class="mr-2">FinTech4Good</span>
			</v-btn>
		</v-app-bar>
		<v-content class="page">
			<!--      第一张图片  -->
			<div style="width: 100%;text-align: center;">
				<v-carousel cycle v-model="swiperIndex1" show-arrows-on-hover height="100%">
					<v-carousel-item v-for="(item,i) in items1" :key="i" :src="item.src">
					</v-carousel-item>
				</v-carousel>
			</div>

			<!--            <div style="position: relative;">-->
			<!--                <v-img-->
			<!--                        :src="require('./assets/bgImage.jpg')"-->
			<!--                        contain-->
			<!--                />-->
			<!--                <div class="up-content">-->
			<!--                    <div style="margin-left: 30px;">-->
			<!--                        科技拥抱未来-->
			<!--                    </div>-->
			<!--                    <div style="margin-left: 70px;">-->
			<!--                        未来拥抱世界-->
			<!--                    </div>-->
			<!--                    <div style="margin-top: 60px; margin-left: 160px;font-size: 36px;">-->
			<!--                        Technology creates the future,-->
			<!--                    </div>-->
			<!--                    <div style="margin-left: 230px;font-size: 36px;">-->
			<!--                        Future embraces the world.-->
			<!--                    </div>-->
			<!--                </div>-->
			<!--            </div>-->


			<!--  总的一些话    -->
			<div style="position: relative;display: flex;flex-direction: column;align-items: center;">
				<v-img :src="require('./assets/toAll.png')" contain />
				<div style="margin-top: 10%">
					<div class="content-image">
						总的一些话
					</div>
					<div class="detail-image">
						<div style="margin-left: 30px;display: inline-block;" />
						未来已来，智慧把握。南京大学普惠•三农金融科技创新研究中心，依托于南京大学优质的学术资源，打造基于区块链可信大数据人工智能的下一代金融经济社会基础设施架构和融合计算范式。同时，我们怀着时代赋予的使命感，希望通过区块链、大数据、人工智能驱动金融经济社会创新，把学术研究写在祖国大地上。
					</div>
				</div>
			</div>
			<!--   轮播图   -->
			<div id="reaDirection"></div>
			<div style="text-align: center">
				<img :src="require('./assets/title.png')" contain width="20%" />
			</div>
			<div style="width: 50%;text-align: center;margin-left: calc(25%)">
				<v-carousel cycle height="300" v-model="swiperIndex" show-arrows-on-hover>
					<v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
					</v-carousel-item>
				</v-carousel>
				<div style="margin-top: 20px;text-align: center;font-size: 35px; color: #188872"><strong>{{options[swiperIndex].title}}</strong>
				</div>
				<div style="margin-top: 20px;text-align: center;font-size: 20px;">{{options[swiperIndex].content}}</div>
			</div>
			<div style="margin-top: 120px;text-align: center;font-size: 20px;">
				下一代金融将借助技术推进“开放金融”，下一代经济的自由化程度将大大增加，进而对下一代社会形成深刻影响。
			</div>
			<!--   研究团队   -->
			<div id="reaTeam"></div>
			<div style="text-align: center;margin-top: 20px">
				<img :src="require('./assets/title2.png')" contain width="20%" />
			</div>
			<div style="width: 100%;text-align: center">
				<div>
					<v-card dark width="25%" style="margin-left: 2.5%; display: inline-block">
						<v-card-title class="lighten-2" style="background-color: #188872;">
							<h2 class="display-1 white--text font-weight-light">首席科学家：<br>
								<a href="https://www.uis.no/about-the-university/contact-us/employees/rong-chunming-article75303-11199.html"
								 style="text-decoration: none; color: white">容淳铭院士</a>
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col style="font-size: large;">
									挪威工程院院士、IEEE(电子电气工程师协会)区块链联合主席（2018）、IEEE云计算协会主席（2017-2019）、
									联合国工业发展组织中挪创新中心主任、欧洲ICT标准顾问，
									担任中国科学院海外评审专家、中国计算机学会顾问等职，被誉为国际顶尖的计算机领域专家。
								</v-col>
							</v-row>
						</v-container>
					</v-card>
					<v-card dark width="25%" style="margin-left: 2.5%;margin-top: 20px; display: inline-block">
						<v-card-title class="lighten-2" style="background-color: #188872">
							<h2 class="display-1 white--text font-weight-light">首席顾问专家：<br>
								<a href="https://statistics.stanford.edu/people/tze-leung-lai" style="text-decoration: none; color: white">黎子良院士</a>
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col style="font-size: large;">
									美国数理统计学院院士，台湾中央研究院院士，美国统计学会会士。美国斯坦福大学统计系教授、统计系原系主任，
									斯坦福金融工程学院计算和数学工程研究所荣誉院士，斯坦福金融数学工程、金融与风险建模研究所主管。
									1983年获国际统计学界COPSS奖(被视为国际统计学“诺贝尔”奖)，系该奖首位华人得主。已出版学术专著10余部，
									发表科研论文270余篇，指导已毕业的博士60余人。
								</v-col>
							</v-row>
						</v-container>
					</v-card>
					<v-card dark width="25%" style="margin-left: 2.5%;margin-top: 20px; display: inline-block">
						<v-card-title class="lighten-2" style="background-color: #188872">
							<h2 class="display-1 white--text font-weight-light">执行负责人：<br>
								<a href="https://im.nju.edu.cn/dxy1/list.htm" style="text-decoration: none; color: white">丁晓蔚博士</a>
							</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col style="font-size: large;">
									曾师从斯坦福大学先进金融科技实验室主任，获经济金融博士学位、统计学博士学位（辅），并有在摩根大通、摩根斯坦利、
									全球顶尖对冲基金城堡对冲基金公司等世界金融名企的工作经历，长期致力于大数据人工智能金融科技的理论积累和实战探索。
									在UTDallas Top 24期刊上发表过数篇论文，其中一篇引用数在同期刊同年论文中排名第一，十年论文中排前2.4%。
									有一些原创性的成果被微软和华尔街所采纳。
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</div>
			</div>
			<v-timeline :dense="$vuetify.breakpoint.smAndDown" style="margin-top: 100px; background-color: black">
				<v-timeline-item color="black purple lighten-2" fill-dot right>
					<v-card style="margin-right: 180px">
						<v-card-title class="purple lighten-2">
							<h2 class="display-1 white--text font-weight-light">区块链实验室</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col>
									区块链涉及数学、密码学、互联网和计算机编程等很多科学技术问题。从应用视角来看，简单来说，区块链是一个分布式的共享账本和数据库，具有去中心化、不可篡改、全程留痕、可以追溯、集体维护、公开透明等特点。
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>

				<v-timeline-item color="red lighten-1" fill-dot small left>
					<v-card style="margin-left: 180px">
						<v-card-title class="red lighten-2">
							<h2 class="display-1 white--text font-weight-light" style="width: 100%;text-align: right">
								人工智能实验室</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col cols="12" style="width: 100%;">
									人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>

				<v-timeline-item color="green lighten-2" fill-dot right>
					<v-card style="margin-right: 180px">
						<v-card-title class="green lighten-2">
							<h2 class="display-1 white--text font-weight-light">大数据实验室</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col cols="12" style="width: 100%">
									“大数据”是需要新处理模式才能具有更强的决策力、洞察发现力和流程优化能力来适应海量、高增长率和多样化的信息资产。大数据技术的战略意义不在于掌握庞大的数据信息，而在于对这些含有意义的数据进行专业化处理。
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>

				<v-timeline-item color="blue lighten-1" fill-dot small left>
					<v-card style="margin-left: 180px">
						<v-card-title class="blue lighten-2">
							<h2 class="display-1 white--text font-weight-light" style="width: 100%;text-align: right">
								FinTech4Good工作部</h2>
						</v-card-title>
						<v-container>
							<v-row>
								<v-col cols="12" style="width: 100%;">
									南京大学普惠·三农科技创新研究中心下设的公益金融科技工作部(FinTech4Good工作部)聚集了一批敢作为敢担当、以梦为马的青年群体，构建起公益创业项目️“基于区块链+可信大数据AI的三农互助金融服务平台项目”。
									FinTech4Good工作部力图通过区块链与可信大数据AI技术为农村打造金融+科技平台，切实助力三农问题，服务乡村振兴
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-timeline-item>
			</v-timeline>
			<!--   模块介绍   -->
			<v-img id="talTraining" src="./assets/人才培养/title.png" style="width: 30%;margin-left: 35%" contain />
			<div style="background-color: black;">

				<!--        <div style="text-align: center;width: 60%;margin-left: 20%">-->
				<!--          南京大学普惠•三农金融科技创新研究中心力图打造成一个多层次、多内涵、成体系的区块链+金融科技创新创业人才培养平台。创新的人才要用创新的方法来培养，通过理论和实践活动，既体现了基于问题导向的学习(Problem-Based Learning)，也体现了基于实践的学习(Practice-Based Learning)，为区块链+人工智能与新金融创新的课程建设提供了有力的支撑。-->
				<!--        </div>-->
				<!--        <div style="text-align: center;width: 60%;margin-left: 20%;margin-top: 20px;">-->
				<!--          平台从学术向社会延伸，一方面“请进来”，邀请了国内外区块链、大数据、人工智能、金融科技理论与实务的诸多专家，邀请到海外院士对团队进行指导。此外，通过“走出去”的方式，获得接受更多专家大咖指点和评判、与国内外同学们交流切磋的机会。项目旨在让青年学生快速理解区块链创新应用模式对金融业务的改造，领悟新技术对商业模式的改变与应用价值，从而激发青年们的创新意识，培养区块链思维与能力，使青年学生们紧紧跟上科技创新的脚步和金融发展的步伐，并近距离跟踪行业前沿。-->
				<!--        </div>-->
				<!-- 选择区 -->
				<v-item-group mandatory style="background-color: black;">
					<v-container>
						<div style="display: flex;justify-content: center">
							<div v-for="(item,i) in humans" :key="i" style="width: 30%;">
								<v-item v-slot:default="{ active, toggle }" :value="groupIndex" :style="i==1?'margin-left:20px':''">
									<v-card :color="i==groupIndex ? 'primary' : ''" class="d-flex align-center justify-center" dark height="100"
									 @click="changeIndex(i)">
										<v-scroll-y-transition>
											<div class="flex-grow-1 text-center" style="font-size: 25px;color: #ffffff;">
												{{item.title}}
											</div>
										</v-scroll-y-transition>
									</v-card>
								</v-item>
							</div>
						</div>
					</v-container>
				</v-item-group>
				<div style="width: 60%;margin-left: 20%;">
					{{humans[groupIndex].content}}
					<a href="#ActEvent">活动事件详情＞＞＞</a>
				</div>
			</div>
			<!--    新增部分1    -->
			<v-img :src="photoArray[Number(tab)]" style="width: 20%;margin-left:40%;margin-top:60px"></v-img>
			<div style="width: 60%;margin-left: 20%;margin-top: 20px">
				<v-card color="grey">
					<v-tabs fixed-tabs v-model="tab" background-color="back" dark>
						<div id="ActEvent"></div>
						<v-tab v-for="item in tabItems" :key="item.tab">
							{{ item.tab }}
						</v-tab>
					</v-tabs>
					<!--                合作机构-->
					<v-tabs-items v-model="tab">
						<div style="background: grey">
							<!--                      合作机构-->
							<v-tab-item>
								<v-card dark color="grey" v-for="i in organization" :key="i">
									<v-card class="mx-auto">
										<v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
										<v-card-title>
											<a :href="i.url" style="text-decoration: none; color: white;" target="_blank">
												{{i.name}}
											</a>
										</v-card-title>
										<v-card-subtitle>
											{{i.introduction}}
										</v-card-subtitle>
									</v-card>
								</v-card>
							</v-tab-item>
							<!--          行业新闻-->
							<v-tab-item>
								<v-card dark color="grey" v-for="i in news" :key="i">
									<v-card class="mx-auto">
										<v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
										<v-card-title>
											<a :href="i.url" style="text-decoration: none; color: white;" target="_blank">
												{{i.title}}
											</a>
										</v-card-title>
										<v-card-subtitle>
											{{i.content}}
										</v-card-subtitle>
									</v-card>
								</v-card>
							</v-tab-item>
							<!--          行业新闻-->
							<v-tab-item>
								<v-card dark color="grey" v-for="i in 4" :key="i">
									<v-card class="mx-auto">
										<v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
										<v-card-title>
											<a :href="i.url" style="text-decoration: none; color: white;" target="_blank">
												{{i}}
											</a>
										</v-card-title>
										<v-card-subtitle>
											{{i}}
										</v-card-subtitle>
									</v-card>
								</v-card>
							</v-tab-item>
							<!--                      行业新闻-->
							<!--          行业新闻-->
							<v-tab-item>
								<v-card dark color="grey" v-for="i in activity" :key="i">
									<v-card class="mx-auto">
										<v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
										<v-card-title>
											<a :href="i.url" style="text-decoration: none; color: white;" target="_blank">
												{{i.title}}
											</a>
										</v-card-title>
										<v-card-subtitle>
											{{i.content}}
										</v-card-subtitle>
									</v-card>
								</v-card>
							</v-tab-item>

						</div>
					</v-tabs-items>
				</v-card>
			</div>

			<v-img src="./assets/article.png" style="width: 100%;margin-top: 100px"></v-img>
		</v-content>
		<!--  底部  -->
		<v-footer color="#545454">
			<v-col class="text-center" cols="12">
				<div style="color:#fff; background-color: #545454;">
					{{ new Date().getFullYear() }} @ <strong>南京大学普惠·三农金融科技创新研究中心</strong><br>
					南京市栖霞区仙林大道163号<br>
					邮编: 210023<br>
					联系方式: blockchainfintech@126.com, blockchainfintech@hotmail.com<br>

				</div>
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
	import HelloWorld from './components/HelloWorld';

	export default {
		name: 'App',

		components: {
			HelloWorld,
		},
		methods: {
			changeIndex(index) {
				this.groupIndex = index;
			},
			async getNews() {
				const data = await this.$http.get(
					"/api/news",
				);
				this.news = data;
			},
			async getActivity() {
				const data = await this.$http.get(
					"/api/getActivity",
				);
				this.activity = data;
			}
		},
		mounted() {
			this.getActivity();
			this.getNews();
		},
		data: () => ({
			showTabOne: false,
			news: [],
			activity: [],
			groupIndex: 0,
			swiperIndex: 0,
			swiperIndex1: 0,
			schoolIcon: require("./assets/schoolIcon.png"),

			organization: [{
				name: "挪威容淳铭院士团队",
				introduction: "容淳铭，挪威工程院院士、IEEE(电子电气工程师协会)区块链联合主席（2018）、IEEE云计算协会主席（2017-2019）、联合国工业发展组织中挪创新中心主任、欧洲ICT标准顾问，担任中国科学院海外评审专家、中国计算机学会顾问等职，被誉为国际顶尖的计算机领域专家。",
				url: 'https://www.qdiap.com/index.php/content/142'
			}, {
				name: "斯坦福大学黎子良院士团队",
				introduction: "黎子良，美国数理统计学院院士，台湾中央研究院院士，美国统计学会会士。美国斯坦福大学统计系教授、统计系原系主任，斯坦福金融工程学院计算和数学工程研究所荣誉院士，斯坦福金融数学工程、金融与风险建模研究所主管。",
				url: 'https://statistics.stanford.edu/people/tze-leung-lai'
			}, {
				name: "斯坦福大学Kay Giesecke教授团队",
				introduction: "Kay Giesecke，斯坦福大学管理科学与工程教授，高级金融技术实验室主任和数学和计算金融项目主任，计算和数学工程研究所的成员，风险数据分析联合会理事会和科学顾问委员会成员，巴切利尔金融学会理事会成员。",
				url: 'https://giesecke.people.stanford.edu'
			}],
			items: [{
					src: "https://colarhua-pic.oss-cn-shenzhen.aliyuncs.com/gary-jw-3/1.jpg",
				},
				{
					src: 'https://colarhua-pic.oss-cn-shenzhen.aliyuncs.com/gary-jw-3/2.jpg',
				},
				{
					src: 'https://colarhua-pic.oss-cn-shenzhen.aliyuncs.com/gary-jw-3/3.jpg',
				},
				{
					src: 'https://colarhua-pic.oss-cn-shenzhen.aliyuncs.com/gary-jw-3/4.jpg',
				},
				{
					src: 'https://colarhua-pic.oss-cn-shenzhen.aliyuncs.com/gary-jw-3/5.jpg\n',
				},
			],
			items1: [{
					src: require("./assets/1.png"),
				},
				{
					src: require('./assets/2.png'),
				},
			],
			options: [{
					title: "可信的金融",
					content: "区块链、大数据和人工智能可以帮助提供更为可信、更为全面的金融大数据，为解决经济和社会中现存的挑战提供更为可靠的数据背景和改良指南。"
				},
				{
					title: "安全的金融",
					content: "基于区块可信大数据的下一代金融，包含了底层支撑技术、节点系统安全漏洞排查、底层共识协议和智能合约，打造更加安全的服务于经济社会的金融科技架构。"
				},
				{
					title: "隐私保护的金融",
					content: "下一代金融致力于研究适用于“去中心化”的用户隐私保护新机制。用户私钥的生成和使用，保证了用户和数据的私密性，提高经济体的自身防御能力。"
				},
				{
					title: "高性能的金融",
					content: "随着大数据时代的到来，下一代金融需要有更加全面高效的运作性能。单系统性能的提升，采用跨链技术来实现多系统的互通，提高了整个经济社会的运作效率。"
				},
				{
					title: "有温度的金融",
					content: "下一代金融更具有人文关怀和时代使命感，我们希望实现金融向善、区块链向善、AI向善、大数据向善、科技向善的目标，服务于三农问题等全面建成小康社会的新话题。"
				}
			],
			humans: [{
					title: "创新金融+科技人才培养",
					content: "南京大学普惠•三农金融科技创新研究中心将以培养跨学科交叉融合的人才为目标，开展更多的教学创新，希望培养一批真正既热爱金融、也热爱科技的优秀人才。从华尔街2008年危机之后来看，金融和科技的融合是大趋势。金融的发展可以通过技术来驱动，因此金融人才要懂技术；而技术人才也要懂金融，那样才能对金融的内在规律特别是风险有一颗敬畏之心。而且要用金融+科技武装他们的头脑，解决金融、经济、社会痛点问题，为祖国经济社会进步服务。"

				},
				{
					title: "公益金融+科技人才培养",
					content: "温度和时代使命感是当下金融人才的必备素养。南京大学普惠三农金融科技创新研究中心公益金融科技(FinTech4Good)工作组，简称“ 南京大学公益金融科技(FinTech4Good)团队”正在着力孵化项目“基于区块链可信大数据人工智能的三农金融创新和人才培养服务平台”，服务于祖国全面建成小康社会的目标实现。"
				},
				// {title:"FinTech4Good工作部网页",content:"南京大学普惠·三农科技创新研究中心下设的公益金融科技工作部(FinTech4Good工作部)聚集了一批敢作为敢担当、以梦为马的青年群体，构建起公益创业项目️“基于区块链+可信大数据AI的三农互助金融服务平台项目”。 FinTech4Good工作部力图通过区块链与可信大数据AI技术为农村打造金融+科技平台，切实助力三农问题，服务乡村振兴。"}
			],
			tab: null,
			tabItems: [{
					tab: '合作机构'
				},
				{
					tab: '活动事件'
				},
				{
					tab: '资源'
				},
				{
					tab: '行业新闻'
				},
			],
			photoArray: [require('./assets/人才培养/1.jpg'), require('./assets/人才培养/2.jpg'),
				require('./assets/人才培养/3.jpg'), require('./assets/人才培养/4.png')
			]

		}),
	};
</script>
<style>
	.page {
		background-color: black;
	}

	.mx-auto {
		margin-top: 10px;
	}

	.content-image {
		position: absolute;
		left: calc(21%);
		top: 24%;
		font-size: 40px;
	}

	.detail-image {
		position: absolute;
		left: calc(10%);
		right: calc(50%);
		top: 34%;
		font-size: 20px;
	}

	.up-content {
		position: absolute;
		bottom: 25%;
		color: white;
		font-size: 85px;
		text-shadow: #000 5px 5px 5px;
	}
</style>
