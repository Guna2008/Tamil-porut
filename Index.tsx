import { useState } from "react";
import { TranslationHeader } from "@/components/TranslationHeader";
import { ModeSelector } from "@/components/ModeSelector";
import { ContentInput } from "@/components/ContentInput";
import { TranslationDisplay } from "@/components/TranslationDisplay";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type TranslationMode = "formal" | "colloquial-coimbatore" | "colloquial-chennai" | "simple";

const Index = () => {
  const [mode, setMode] = useState<TranslationMode>("formal");
  const [englishText, setEnglishText] = useState("");
  const [tamilText, setTamilText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <TranslationHeader />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <ModeSelector selectedMode={mode} onModeChange={setMode} />
        </div>

        <Tabs defaultValue="translate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="translate">Translation</TabsTrigger>
            <TabsTrigger value="currency">Currency Converter</TabsTrigger>
          </TabsList>

          <TabsContent value="translate" className="space-y-6">
            <ContentInput
              mode={mode}
              englishText={englishText}
              setEnglishText={setEnglishText}
              tamilText={tamilText}
              setTamilText={setTamilText}
              isTranslating={isTranslating}
              setIsTranslating={setIsTranslating}
            />

            {tamilText && (
              <TranslationDisplay
                englishText={englishText}
                tamilText={tamilText}
                mode={mode}
              />
            )}
          </TabsContent>

          <TabsContent value="currency">
            <CurrencyConverter />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
