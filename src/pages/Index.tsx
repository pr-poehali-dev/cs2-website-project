import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedMatch, setSelectedMatch] = useState(0);

  const tournaments = [
    {
      name: "IEM Katowice 2024",
      status: "LIVE",
      prize: "$1,000,000",
      teams: 24,
      matches: [
        { team1: "NAVI", team2: "FaZe", score1: 16, score2: 14, map: "Mirage", status: "Завершен" },
        { team1: "G2", team2: "Vitality", score1: 12, score2: 8, map: "Dust2", status: "LIVE" },
        { team1: "Astralis", team2: "NIP", score1: 0, score2: 0, map: "Inferno", status: "Скоро" }
      ]
    }
  ];

  const players = [
    { name: "s1mple", team: "NAVI", rating: 1.28, kd: 1.42, adr: 85.3, rank: 1 },
    { name: "ZywOo", team: "Vitality", rating: 1.26, kd: 1.38, adr: 83.1, rank: 2 },
    { name: "sh1ro", team: "C9", rating: 1.19, kd: 1.33, adr: 78.9, rank: 3 },
    { name: "m0NESY", team: "G2", rating: 1.17, kd: 1.29, adr: 76.4, rank: 4 }
  ];

  const news = [
    {
      title: "NAVI побеждают в финале IEM Katowice",
      time: "2 часа назад",
      category: "Результаты"
    },
    {
      title: "Новый состав FaZe показал сильную игру",
      time: "6 часов назад", 
      category: "Трансферы"
    },
    {
      title: "Анонс BLAST Premier Spring 2024",
      time: "1 день назад",
      category: "Анонсы"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/e07cad82-096d-45de-8742-0ef343cae07e.jpg')`
        }}
      >
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold text-white">
            COUNTER-STRIKE <span className="text-primary">2</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Профессиональная киберспортивная арена. Следите за турнирами, статистикой игроков и последними новостями CS2
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="animate-glow">
              <Icon name="Play" className="mr-2" />
              Смотреть матчи
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Trophy" className="mr-2" />
              Турниры
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-card/95 backdrop-blur border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">CS2 Pro</div>
            <div className="flex gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Home" className="mr-2" size={16} />
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Trophy" className="mr-2" size={16} />
                Турниры
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Users" className="mr-2" size={16} />
                Игроки
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="Newspaper" className="mr-2" size={16} />
                Новости
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Live Matches */}
        <section className="animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Radio" className="text-secondary animate-pulse" size={24} />
            <h2 className="text-3xl font-bold">Матчи LIVE</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments[0].matches.map((match, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <Badge variant={match.status === 'LIVE' ? 'destructive' : match.status === 'Завершен' ? 'secondary' : 'outline'}>
                      {match.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{match.map}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-primary" size={20} />
                        <span className="font-semibold">{match.team1}</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">{match.score1}</span>
                    </div>
                    <div className="text-center text-muted-foreground">VS</div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Icon name="Shield" className="text-secondary" size={20} />
                        <span className="font-semibold">{match.team2}</span>
                      </div>
                      <span className="text-2xl font-bold text-secondary">{match.score2}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tournament Info */}
        <section className="animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Активные турниры</h2>
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-primary">{tournaments[0].name}</CardTitle>
                  <p className="text-muted-foreground mt-2">Премиальный турнир мирового уровня</p>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary">
                  {tournaments[0].status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Icon name="DollarSign" className="mx-auto mb-2 text-primary" size={32} />
                  <div className="text-2xl font-bold text-primary">{tournaments[0].prize}</div>
                  <div className="text-sm text-muted-foreground">Призовой фонд</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Icon name="Users" className="mx-auto mb-2 text-secondary" size={32} />
                  <div className="text-2xl font-bold text-secondary">{tournaments[0].teams}</div>
                  <div className="text-sm text-muted-foreground">Команд участвует</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Icon name="Calendar" className="mx-auto mb-2 text-accent" size={32} />
                  <div className="text-2xl font-bold text-accent">5</div>
                  <div className="text-sm text-muted-foreground">Дней до финала</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs Section */}
        <section className="animate-slide-up">
          <Tabs defaultValue="players" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="players" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Award" className="mr-2" size={16} />
                Топ игроки
              </TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Newspaper" className="mr-2" size={16} />
                Новости
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="players" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Рейтинг игроков</h3>
              <div className="grid gap-4">
                {players.map((player, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                            {player.rank}
                          </div>
                          <div>
                            <div className="font-semibold text-lg">{player.name}</div>
                            <div className="text-sm text-muted-foreground">{player.team}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-lg font-bold text-primary">{player.rating}</div>
                            <div className="text-xs text-muted-foreground">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-secondary">{player.kd}</div>
                            <div className="text-xs text-muted-foreground">K/D</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-accent">{player.adr}</div>
                            <div className="text-xs text-muted-foreground">ADR</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="news" className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Последние новости</h3>
              <div className="grid gap-4">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Clock" size={14} />
                            {item.time}
                          </div>
                        </div>
                        <Badge variant="outline">{item.category}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Stats Preview */}
        <section className="animate-slide-up">
          <h2 className="text-3xl font-bold mb-6">Статистика матчей</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart" className="text-primary" />
                Общая статистика сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">42</div>
                  <div className="text-sm text-muted-foreground">Матчей сыграно</div>
                  <Progress value={75} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">1.2M</div>
                  <div className="text-sm text-muted-foreground">Зрителей онлайн</div>
                  <Progress value={85} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">18</div>
                  <div className="text-sm text-muted-foreground">Активных турниров</div>
                  <Progress value={60} className="mt-2" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">256</div>
                  <div className="text-sm text-muted-foreground">Команд участвует</div>
                  <Progress value={90} className="mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">CS2 Pro</div>
            <p className="text-muted-foreground">
              Ваш источник актуальной информации о профессиональном Counter-Strike 2
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitch" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;