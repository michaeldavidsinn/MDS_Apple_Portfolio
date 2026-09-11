import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImageurl } from "../../utils";
import styles from "./CommandPalette.module.css";

export const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const actions = [
    {
      id: "projects",
      category: "Navigation",
      title: "Explore Projects",
      subtitle: "Jump to curated engineering & AI showcase",
      icon: "🚀",
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "experience",
      category: "Navigation",
      title: "View Experience & Skills",
      subtitle: "Timeline and 22+ technical proficiencies",
      icon: "⚡",
      perform: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "about",
      category: "Navigation",
      title: "About Me",
      subtitle: "Bento overview, credentials & Apple Academy",
      icon: "💻",
      perform: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "certificates",
      category: "Navigation",
      title: "Certifications",
      subtitle: "cPanel, BNSP Programmer, and CEFR B2",
      icon: "🏆",
      perform: () => {
        document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "contact",
      category: "Navigation",
      title: "Contact & Connect",
      subtitle: "Send message or open inquiry",
      icon: "📬",
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      id: "resume",
      category: "Actions",
      title: "Open ATS Resume (PDF)",
      subtitle: "View official Michael DS_CV 2026",
      icon: "📄",
      perform: () => {
        window.open(getImageurl("cv/Michael DS_CV 2026.pdf"), "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "email",
      category: "Actions",
      title: copied ? "Copied Email! ✓" : "Copy Email Address",
      subtitle: "michaelsin04@gmail.com",
      icon: "✉️",
      perform: () => {
        navigator.clipboard.writeText("michaelsin04@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "portfolio-source",
      category: "Actions",
      title: "View Portfolio Source Code",
      subtitle: "github.com/michaeldavidsinn/MDS_Apple_Portfolio",
      icon: "💻",
      perform: () => {
        window.open("https://github.com/michaeldavidsinn/MDS_Apple_Portfolio", "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "github",
      category: "Social",
      title: "Open GitHub Profile",
      subtitle: "github.com/michaeldavidsinn",
      icon: "🐙",
      perform: () => {
        window.open("https://github.com/michaeldavidsinn", "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "linkedin",
      category: "Social",
      title: "Open LinkedIn Profile",
      subtitle: "Connect on LinkedIn",
      icon: "💼",
      perform: () => {
        window.open("https://linkedin.com/in/michael-david-sin-907682245", "_blank", "noopener,noreferrer");
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery("");
    }
  }, [isOpen]);

  // Global keydown handler for Cmd+K and arrow navigation
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [setIsOpen]);

  // Palette internal keydown handler
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filteredActions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredActions.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        filteredActions[selectedIndex].perform();
        if (filteredActions[selectedIndex].id !== "email") {
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <motion.div
            className={styles.dialog}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {/* Search Input Bar */}
            <div className={styles.searchBar}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                ref={inputRef}
                type="text"
                className={styles.input}
                placeholder="Type a command or search sections..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
              />
              <span className={styles.escBadge} onClick={() => setIsOpen(false)}>
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className={styles.list}>
              {filteredActions.length === 0 ? (
                <div className={styles.empty}>No commands found for "{query}"</div>
              ) : (
                filteredActions.map((action, idx) => (
                  <div
                    key={action.id}
                    className={`${styles.item} ${selectedIndex === idx ? styles.itemActive : ""}`}
                    onClick={() => {
                      action.perform();
                      if (action.id !== "email") setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <span className={styles.itemIcon}>{action.icon}</span>
                    <div className={styles.itemContent}>
                      <span className={styles.itemTitle}>{action.title}</span>
                      <span className={styles.itemSubtitle}>{action.subtitle}</span>
                    </div>
                    <span className={styles.itemCategory}>{action.category}</span>
                  </div>
                ))
              )}
            </div>

            {/* Footer keyboard hints */}
            <div className={styles.footer}>
              <div className={styles.hint}>
                <span className={styles.key}>↑</span>
                <span className={styles.key}>↓</span>
                <span>Navigate</span>
              </div>
              <div className={styles.hint}>
                <span className={styles.key}>↵</span>
                <span>Select</span>
              </div>
              <div className={styles.hint}>
                <span className={styles.key}>esc</span>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
