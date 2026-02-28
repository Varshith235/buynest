import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SettingsPage = () => {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-display font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your profile and preferences</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-xl p-6">
          <h3 className="font-display font-semibold mb-4">Profile</h3>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input defaultValue={user?.name} className="bg-secondary/50" maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input defaultValue={user?.email} className="bg-secondary/50" maxLength={255} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Input defaultValue={user?.role} disabled className="bg-secondary/30" />
            </div>
            <Button type="submit" className="gradient-primary text-primary-foreground">
              {saved ? <><CheckCircle2 className="w-4 h-4 mr-2" /> Saved!</> : "Save Changes"}
            </Button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6">
          <h3 className="font-display font-semibold mb-4">Change Password</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <Input type="password" placeholder="••••••••" className="bg-secondary/50" maxLength={100} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>New Password</Label>
                <Input type="password" placeholder="••••••••" className="bg-secondary/50" maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label>Confirm Password</Label>
                <Input type="password" placeholder="••••••••" className="bg-secondary/50" maxLength={100} />
              </div>
            </div>
            <Button variant="outline">Update Password</Button>
          </form>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
