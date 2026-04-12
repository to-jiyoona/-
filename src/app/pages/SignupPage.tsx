import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">커뮤니티 가입</h1>
          <p className="text-muted-foreground">함께 성장하는 커뮤니티에 참여하세요</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="이름을 입력하세요" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="이메일을 입력하세요" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
          </div>

          <Button className="w-full">가입하기</Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          이미 계정이 있으신가요?{" "}
          <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/80">
            로그인
          </a>
        </p>
      </div>
    </div>
  );
}
