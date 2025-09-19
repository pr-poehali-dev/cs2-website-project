import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [uploadedVideo, setUploadedVideo] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState('forest');
  const [selectedSeason, setSelectedSeason] = useState('spring');
  const [processingProgress, setProcessingProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const backgrounds = [
    { id: 'forest', name: 'Лес', emoji: '🌲' },
    { id: 'beach', name: 'Пляж', emoji: '🏖️' },
    { id: 'city', name: 'Город', emoji: '🌆' },
    { id: 'space', name: 'Космос', emoji: '🌌' },
    { id: 'mountains', name: 'Горы', emoji: '⛰️' },
    { id: 'office', name: 'Офис', emoji: '🏢' }
  ];

  const seasons = [
    { id: 'spring', name: 'Весна', emoji: '🌸' },
    { id: 'summer', name: 'Лето', emoji: '☀️' },
    { id: 'autumn', name: 'Осень', emoji: '🍂' },
    { id: 'winter', name: 'Зима', emoji: '❄️' }
  ];

  const effects = [
    { id: 'rain', name: 'Дождь', emoji: '🌧️' },
    { id: 'snow', name: 'Снег', emoji: '🌨️' },
    { id: 'fog', name: 'Туман', emoji: '🌫️' },
    { id: 'sunbeams', name: 'Солнечные лучи', emoji: '☀️' },
    { id: 'particles', name: 'Частицы', emoji: '✨' },
    { id: 'lightning', name: 'Молния', emoji: '⚡' }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedVideo(file);
    }
  };

  const startGeneration = () => {
    setProcessingProgress(0);
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/609a02b7-6302-4d47-a9b6-0e9c19c6c80e.jpg')`
        }}
      >
        <div className="text-center space-y-8 animate-fade-in">
          <div className="animate-float">
            <h1 className="text-7xl font-bold text-white mb-4">
              AI <span className="text-primary animate-glow">VIDEO</span> MAKER
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Создавайте потрясающие видео с помощью ИИ. Меняйте фоны, времена года, добавляйте объекты.
            <br />
            <span className="text-primary font-semibold">До 1 часа видео абсолютно бесплатно!</span>
          </p>
          
          <div className="flex gap-6 justify-center">
            <Button 
              size="lg" 
              className="animate-pulse-glow text-lg px-8 py-4 bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
              onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Sparkles" className="mr-2" />
              Начать создание
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
            >
              <Icon name="Play" className="mr-2" />
              Посмотреть примеры
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <Icon name="Camera" className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Замена фонов</h3>
              <p className="text-sm text-gray-400">Любые локации и сцены</p>
            </div>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-secondary/20">
              <Icon name="Sun" className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Времена года</h3>
              <p className="text-sm text-gray-400">Весна, лето, осень, зима</p>
            </div>
            <div className="bg-card/20 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
              <Icon name="Zap" className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Спецэффекты</h3>
              <p className="text-sm text-gray-400">Дождь, снег, молнии</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16" id="upload-section">
        {/* Upload Section */}
        <section className="mb-16 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Загрузите ваше видео</h2>
            <p className="text-muted-foreground text-lg">Поддерживаются форматы: MP4, AVI, MOV. Максимум 1 час</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* File Upload */}
            <Card className="border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors">
              <CardContent className="p-8 text-center">
                <Icon name="Upload" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Загрузить файл</h3>
                <p className="text-muted-foreground mb-6">Перетащите видео или выберите файл</p>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="video/*"
                  className="hidden"
                />
                
                <Button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full"
                  variant={uploadedVideo ? "secondary" : "default"}
                >
                  <Icon name="FolderOpen" className="mr-2" />
                  {uploadedVideo ? `Выбран: ${uploadedVideo.name}` : 'Выбрать видео'}
                </Button>
              </CardContent>
            </Card>

            {/* Camera Recording */}
            <Card className="border-2 border-dashed border-secondary/30 hover:border-secondary/60 transition-colors">
              <CardContent className="p-8 text-center">
                <Icon name="Video" className="mx-auto mb-4 text-secondary" size={48} />
                <h3 className="text-xl font-semibold mb-2">Записать видео</h3>
                <p className="text-muted-foreground mb-6">Используйте веб-камеру для записи</p>
                
                <Button 
                  onClick={() => setIsRecording(!isRecording)}
                  className="w-full"
                  variant={isRecording ? "destructive" : "secondary"}
                >
                  <Icon name={isRecording ? "Square" : "Circle"} className="mr-2" />
                  {isRecording ? 'Остановить запись' : 'Начать запись'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Editor Section */}
        {(uploadedVideo || isRecording) && (
          <section className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Настройте ваше видео</h2>
              <p className="text-muted-foreground text-lg">Выберите фон, время года и эффекты</p>
            </div>

            <Tabs defaultValue="backgrounds" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="backgrounds" className="text-lg">
                  <Icon name="Image" className="mr-2" />
                  Фоны
                </TabsTrigger>
                <TabsTrigger value="seasons" className="text-lg">
                  <Icon name="Sun" className="mr-2" />
                  Времена года
                </TabsTrigger>
                <TabsTrigger value="effects" className="text-lg">
                  <Icon name="Sparkles" className="mr-2" />
                  Эффекты
                </TabsTrigger>
              </TabsList>

              <TabsContent value="backgrounds" className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Выберите фон</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {backgrounds.map((bg) => (
                    <Card 
                      key={bg.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedBackground === bg.id ? 'ring-2 ring-primary bg-primary/10' : ''
                      }`}
                      onClick={() => setSelectedBackground(bg.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-4xl mb-2">{bg.emoji}</div>
                        <h4 className="font-semibold">{bg.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="seasons" className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Выберите время года</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {seasons.map((season) => (
                    <Card 
                      key={season.id}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        selectedSeason === season.id ? 'ring-2 ring-secondary bg-secondary/10' : ''
                      }`}
                      onClick={() => setSelectedSeason(season.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-6xl mb-4">{season.emoji}</div>
                        <h4 className="text-xl font-semibold">{season.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="effects" className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Добавьте эффекты</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {effects.map((effect) => (
                    <Card 
                      key={effect.id}
                      className="cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-accent/10"
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-4xl mb-2">{effect.emoji}</div>
                        <h4 className="font-semibold">{effect.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Настройки эффектов</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="intensity">Интенсивность эффектов</Label>
                      <Slider id="intensity" defaultValue={[50]} max={100} step={1} className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lighting">Освещение</Label>
                      <Slider id="lighting" defaultValue={[70]} max={100} step={1} className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="saturation">Насыщенность</Label>
                      <Slider id="saturation" defaultValue={[60]} max={100} step={1} className="mt-2" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Generation Button */}
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                onClick={startGeneration}
                className="text-xl px-12 py-6 bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-transform animate-glow"
              >
                <Icon name="Wand2" className="mr-3" size={24} />
                Создать AI видео
              </Button>
            </div>

            {/* Progress */}
            {processingProgress > 0 && (
              <Card className="mt-8 max-w-2xl mx-auto animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Loader2" className="animate-spin text-primary" />
                    Создание видео...
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={processingProgress} className="mb-4" />
                  <p className="text-center text-muted-foreground">
                    {processingProgress}% завершено
                    {processingProgress === 100 && " - Готово! 🎉"}
                  </p>
                </CardContent>
              </Card>
            )}
          </section>
        )}

        {/* Features Section */}
        <section className="mt-24 animate-slide-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-muted-foreground text-lg">Всё что нужно для создания профессиональных видео</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Icon name="Clock" className="text-primary mb-2" size={32} />
                <CardTitle>До 1 часа бесплатно</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создавайте видео длительностью до 60 минут без ограничений и водяных знаков
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <Icon name="Palette" className="text-secondary mb-2" size={32} />
                <CardTitle>Множество фонов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Огромная библиотека фонов: от природных пейзажей до футуристических локаций
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <Icon name="Zap" className="text-accent mb-2" size={32} />
                <CardTitle>Быстрая обработка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мощные серверы с GPU обрабатывают ваше видео за считанные минуты
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Icon name="Download" className="text-primary mb-2" size={32} />
                <CardTitle>Высокое качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Экспорт в 4K разрешении с сохранением всех деталей и качества
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <Icon name="Shield" className="text-secondary mb-2" size={32} />
                <CardTitle>Приватность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ваши видео обрабатываются конфиденциально и удаляются после загрузки
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <Icon name="Smartphone" className="text-accent mb-2" size={32} />
                <CardTitle>Любые устройства</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работает на компьютерах, планшетах и смартфонах через браузер
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-24 animate-slide-up">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-muted-foreground">Видео создано</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">500K+</div>
                  <div className="text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">100+</div>
                  <div className="text-muted-foreground">Готовых фонов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              AI Video Maker
            </div>
            <p className="text-muted-foreground mb-8">
              Создавайте невероятные видео с помощью искусственного интеллекта
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                <Icon name="Youtube" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary hover:text-secondary/80">
                <Icon name="Twitter" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-accent hover:text-accent/80">
                <Icon name="Instagram" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;