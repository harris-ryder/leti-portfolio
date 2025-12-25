export default function FontTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl">Font Test Page</h1>
      
      <p className="font-arial">Arial Regular: The quick brown fox jumps over the lazy dog</p>
      <p className="font-arial-bold">Arial Bold: The quick brown fox jumps over the lazy dog</p>
      <p className="font-arial-italic">Arial Italic: The quick brown fox jumps over the lazy dog</p>
      <p className="font-arial-bold-italic">Arial Bold Italic: The quick brown fox jumps over the lazy dog</p>
      <p className="font-arial-black">Arial Black: The quick brown fox jumps over the lazy dog</p>
      
      <div className="mt-8">
        <p>Direct style attribute test:</p>
        <p style={{ fontFamily: "'Arial Italic'" }}>Arial Italic with style attribute: The quick brown fox jumps over the lazy dog</p>
      </div>
      
      <div className="mt-8">
        <p>Tailwind arbitrary value test:</p>
        <p className="font-['Arial_Italic']">Arial Italic with arbitrary value: The quick brown fox jumps over the lazy dog</p>
      </div>
      
      <div className="mt-8">
        <p>CSS variable test:</p>
        <p style={{ fontFamily: "var(--font-arial-italic)" }}>Arial Italic with CSS variable: The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
}